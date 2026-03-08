import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#08090a] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-emerald-400" />
          </div>
        </div>

        <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff5500] mb-3">
          Payment Confirmed
        </p>

        <h1
          className="font-display text-[clamp(2rem,5vw,3rem)] font-black uppercase leading-tight text-[#f0ede8] mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >
          You&apos;re in.
        </h1>

        <p className="text-[#6b7280] text-base mb-8">
          Your payment was successful. Your campaign credits are now active. Head to your dashboard
          to launch your first campaign.
        </p>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 bg-[#ff5500] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-[#e64d00] transition-colors active:scale-[0.98]"
        >
          Go to Dashboard
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  )
}
