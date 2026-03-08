import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
})

const PLANS = {
  starter: {
    name: 'Starter Plan',
    amount: 49900, // $499.00 in cents
    description: '10 videos, 3 creators, 48h turnaround',
  },
  growth: {
    name: 'Growth Plan',
    amount: 129900, // $1,299.00 in cents
    description: '30 videos, 10 creators, 24h turnaround',
  },
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { plan } = body as { plan: string }

  if (!plan || !(plan in PLANS)) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const planConfig = PLANS[plan as keyof typeof PLANS]
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'

  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: planConfig.name,
            description: planConfig.description,
          },
          unit_amount: planConfig.amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cancel`,
    customer_email: session.user.email ?? undefined,
    metadata: {
      userId: session.user.id,
      plan,
    },
  })

  // Create a pending payment record
  await prisma.payment.create({
    data: {
      userId: session.user.id,
      stripeSessionId: checkoutSession.id,
      amount: planConfig.amount,
      status: 'pending',
      plan,
    },
  })

  return NextResponse.json({ url: checkoutSession.url })
}
