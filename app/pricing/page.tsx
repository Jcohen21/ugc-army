'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Zap, ArrowRight, Loader2 } from 'lucide-react'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'Perfect for brands testing UGC at scale.',
    features: [
      '10 videos per month',
      '3 vetted creators',
      '48h turnaround',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$1,299',
    period: '/month',
    description: 'For brands ready to dominate their category.',
    features: [
      '30 videos per month',
      '10 vetted creators',
      '24h turnaround',
      'Advanced analytics',
      'Priority support',
      'A/B testing packs',
      'Dedicated account manager',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    price: 'Custom',
    period: '',
    description: 'White-glove service for high-volume brands.',
    features: [
      'Unlimited videos',
      'Unlimited creators',
      'Same-day turnaround',
      'Custom analytics dashboard',
      '24/7 dedicated support',
      'Creative strategy sessions',
      'Influencer licensing add-ons',
    ],
    cta: 'Contact Us',
    popular: false,
  },
]

export default function PricingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleCheckout(planId: string) {
    if (planId === 'scale') {
      router.push('mailto:hello@ugcarmy.com')
      return
    }

    setLoading(planId)
    setError(null)

    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId }),
      })

      const data = await res.json()

      if (!res.ok) {
        if (res.status === 401) {
          router.push('/login?callbackUrl=/pricing')
          return
        }
        throw new Error(data.error || 'Failed to create checkout session')
      }

      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(null)
    }
  }

  return (
    <main className="min-h-screen bg-[#08090a] px-6 py-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5500] mb-4">Pricing</p>
        <h1
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-tight text-[#f0ede8] mb-6"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >
          One flat rate.
          <br />
          <span className="text-[#ff5500]">No surprises.</span>
        </h1>
        <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
          Creators keep 100% of their earnings. You pay one flat monthly rate. No hidden fees,
          no per-video markups.
        </p>
      </div>

      {/* Plans */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative border rounded-sm flex flex-col transition-colors duration-200 ${
              plan.popular
                ? 'border-[#ff5500] bg-[#0f1012]'
                : 'border-[#252729] bg-[#0f1012] hover:border-[#ff5500]/30'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-px left-0 right-0 flex justify-center">
                <div className="bg-[#ff5500] text-white text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1 rounded-b-sm">
                  Most Popular
                </div>
              </div>
            )}

            <div className="p-8 flex-1 flex flex-col">
              {/* Plan header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-[#ff5500]" />
                  <p
                    className="text-[10px] uppercase tracking-[0.2em] text-[#ff5500] font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {plan.name}
                  </p>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-[3rem] font-black text-[#f0ede8] leading-none"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-[#6b7280]">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-[#6b7280]">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#ff5500] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#9ca3af]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleCheckout(plan.id)}
                disabled={loading === plan.id}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
                  plan.popular
                    ? 'bg-[#ff5500] text-white hover:bg-[#e64d00] active:scale-[0.98]'
                    : 'border border-[#252729] text-[#f0ede8] hover:border-[#ff5500]/60 hover:text-[#ff5500]'
                }`}
              >
                {loading === plan.id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="max-w-5xl mx-auto mb-6">
          <div className="border border-red-500/30 bg-red-500/10 rounded-sm px-4 py-3 text-sm text-red-400 text-center">
            {error}
          </div>
        </div>
      )}

      {/* Trust line */}
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs text-[#3d4147] uppercase tracking-widest">
          Stripe-secured payments · Test mode active · Cancel anytime
        </p>
      </div>
    </main>
  )
}
