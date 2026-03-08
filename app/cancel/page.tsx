import Link from 'next/link'
import { XCircle, ArrowLeft } from 'lucide-react'

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-[#08090a] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#252729] border border-[#2e3035] flex items-center justify-center">
            <XCircle className="w-8 h-8 text-[#6b7280]" />
          </div>
        </div>

        <p className="text-[10px] uppercase tracking-[0.25em] text-[#6b7280] mb-3">
          Payment Cancelled
        </p>

        <h1
          className="font-display text-[clamp(2rem,5vw,3rem)] font-black uppercase leading-tight text-[#f0ede8] mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >
          No worries.
        </h1>

        <p className="text-[#6b7280] text-base mb-8">
          Your payment was cancelled and you haven&apos;t been charged. Come back anytime when
          you&apos;re ready to get started.
        </p>

        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 border border-[#252729] text-[#f0ede8] px-8 py-3.5 text-sm font-bold uppercase tracking-wider rounded-sm hover:border-[#ff5500]/60 hover:text-[#ff5500] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Pricing
        </Link>
      </div>
    </main>
  )
}
