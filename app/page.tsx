import Link from 'next/link'
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap, Target, Star, Play } from 'lucide-react'

const stats = [
  { value: '12K+', label: 'Active Creators' },
  { value: '840+', label: 'Brand Partners' },
  { value: '98%', label: 'Delivery Rate' },
  { value: '$4.2M', label: 'Creator Earnings' },
]

const features = [
  {
    icon: Target,
    title: 'Precision Matching',
    description:
      'Our algorithm matches your brand with creators whose audience, style, and performance metrics align with your goals.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description:
      'From brief to final asset in as little as 48 hours. No more weeks of back-and-forth with agencies.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Performance',
    description:
      'UGC converts 4x better than brand-produced content. Our creators know how to make content that moves.',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Guaranteed',
    description:
      'Every piece of content goes through our review system before delivery. You only pay for what you love.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Post Your Brief',
    desc: 'Describe your campaign, budget, and deliverables in minutes.',
  },
  {
    num: '02',
    title: 'Get Matched',
    desc: 'We surface the top creators for your brand from our vetted network.',
  },
  {
    num: '03',
    title: 'Review & Approve',
    desc: 'Collaborate directly. Request revisions. Own the content outright.',
  },
]

const testimonials = [
  {
    quote:
      'UGC Army delivered 20 pieces of content in a week. Our ROAS jumped 3.2x on the first campaign.',
    name: 'Sarah K.',
    role: 'Head of Growth, Nova Skincare',
    rating: 5,
  },
  {
    quote: "I've tripled my monthly income since joining. The briefs are clear, payment is instant.",
    name: 'Marcus T.',
    role: 'UGC Creator, 180K followers',
    rating: 5,
  },
  {
    quote:
      'Finally a platform that treats creators like professionals. Night and day vs. the alternatives.',
    name: 'Priya M.',
    role: 'Lifestyle Creator & Brand Partner',
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="relative">
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 md:px-10 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(255,85,0,0.08) 0%, rgba(255,85,0,0.03) 40%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto w-full">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#ff5500]/30 rounded-sm mb-8 animate-fade-in"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#ff5500] font-medium">
              Now accepting brand applications
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-none tracking-tight animate-fade-up"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              animationDelay: '0.2s',
              opacity: 0,
              letterSpacing: '-0.02em',
            }}
          >
            <span className="block text-[#f0ede8]">Deploy</span>
            <span className="block text-[#ff5500]">Your Content</span>
            <span className="block text-[#f0ede8]">Army.</span>
          </h1>

          {/* Sub headline */}
          <div
            className="mt-8 flex flex-col md:flex-row md:items-start gap-8 animate-fade-up"
            style={{ animationDelay: '0.35s', opacity: 0 }}
          >
            <p className="text-lg text-[#9ca3af] leading-relaxed max-w-md font-light">
              Connect with vetted UGC creators who produce authentic content that converts. Scale
              fast, pay per delivery, own everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:ml-auto md:flex-col md:min-w-[200px]">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 bg-[#ff5500] hover:bg-[#ff6e1f] text-white font-medium px-6 py-3.5 rounded-sm transition-all duration-200"
                style={{ letterSpacing: '0.02em' }}
              >
                Start as a Brand
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/creators"
                className="inline-flex items-center justify-center gap-2 border border-[#252729] hover:border-[#ff5500]/40 text-[#f0ede8] hover:text-[#ff5500] font-medium px-6 py-3.5 rounded-sm transition-all duration-200"
              >
                Join as Creator
              </Link>
            </div>
          </div>

          {/* Video demo strip */}
          <div
            className="mt-16 border border-[#252729] rounded-sm overflow-hidden animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            <div
              className="relative aspect-video bg-[#0f1012] flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #0f1012 0%, #131518 50%, #0f1012 100%)',
              }}
            >
              {/* Decorative grid lines */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,85,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.05) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Play button */}
              <button className="group relative z-10 flex items-center justify-center w-16 h-16 bg-[#ff5500] hover:bg-[#ff6e1f] rounded-full transition-colors duration-200 shadow-lg">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
                <div
                  className="absolute inset-0 rounded-full border border-[#ff5500]/40"
                  style={{ animation: 'pulse-accent 2s infinite' }}
                />
              </button>
              <span className="absolute bottom-6 left-6 text-xs text-[#6b7280] uppercase tracking-widest">
                See how it works — 2 min
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────── */}
      <section className="border-y border-[#252729] bg-[#0f1012]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#252729]">
            {stats.map((stat) => (
              <div key={stat.label} className="px-8 py-10 flex flex-col gap-1">
                <span
                  className="font-display text-5xl font-black text-[#ff5500]"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                >
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#6b7280]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────── */}
      <section id="how-it-works" className="py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#ff5500] mb-3">Process</p>
              <h2
                className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-tight text-[#f0ede8]"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >
                Three steps.
                <br />
                Zero friction.
              </h2>
            </div>
            <p className="text-[#6b7280] max-w-xs leading-relaxed text-sm">
              We stripped out everything that slows you down. From brief to content — fast.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#252729]">
            {steps.map((step, i) => (
              <div key={step.num} className="bg-[#08090a] p-10 relative group">
                <span
                  className="font-display text-[5rem] font-black leading-none text-[#1c1e21] select-none absolute top-6 right-8 transition-colors duration-300 group-hover:text-[#ff5500]/10"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                >
                  {step.num}
                </span>
                <div className="relative z-10">
                  <h3
                    className="font-display text-2xl font-bold uppercase text-[#f0ede8] mb-3"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-[#ff5500]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────── */}
      <section id="for-brands" className="py-28 px-6 md:px-10 bg-[#0f1012]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#ff5500] mb-3">
              Capabilities
            </p>
            <h2
              className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-tight text-[#f0ede8]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
            >
              Built for brands
              <br />
              <span className="text-[#ff5500]">serious about</span> UGC.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="group border border-[#252729] hover:border-[#ff5500]/30 p-8 rounded-sm transition-all duration-300 bg-[#08090a]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 border border-[#252729] group-hover:border-[#ff5500]/40 flex items-center justify-center rounded-sm transition-colors duration-300">
                      <Icon className="w-4 h-4 text-[#ff5500]" />
                    </div>
                    <div>
                      <h3
                        className="font-display text-xl font-bold uppercase text-[#f0ede8] mb-2"
                        style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                      >
                        {f.title}
                      </h3>
                      <p className="text-sm text-[#6b7280] leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#ff5500] mb-3">
              Social Proof
            </p>
            <h2
              className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-tight text-[#f0ede8]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
            >
              The results
              <br />
              speak loudly.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-[#252729] p-8 rounded-sm bg-[#0f1012] flex flex-col"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#ff5500] text-[#ff5500]" />
                  ))}
                </div>
                <blockquote className="text-[#d1ccc7] text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-[#252729]">
                  <div className="w-9 h-9 rounded-full bg-[#252729] flex items-center justify-center text-xs font-bold text-[#ff5500]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#f0ede8]">{t.name}</p>
                    <p className="text-xs text-[#6b7280]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR CREATORS ─────────────────────────────────── */}
      <section
        id="for-creators"
        className="py-28 px-6 md:px-10 bg-[#0f1012] border-y border-[#252729]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#ff5500] mb-3">Creators</p>
              <h2
                className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-tight text-[#f0ede8] mb-6"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >
                Turn your content
                <br />
                into <span className="text-[#ff5500]">income.</span>
              </h2>
              <p className="text-[#9ca3af] leading-relaxed mb-8 text-sm">
                Join our network of professional UGC creators. Get matched with brands that fit your
                niche. Create on your schedule. Get paid fast.
              </p>
              <ul className="flex flex-col gap-3 mb-10">
                {[
                  'No upfront costs to join',
                  'Transparent pay — you set your rates',
                  'Direct brand relationships',
                  'Fast payments, no net-30 nonsense',
                  'Creative briefs, not rigid scripts',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#9ca3af]">
                    <CheckCircle2 className="w-4 h-4 text-[#ff5500] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/creators"
                className="group inline-flex items-center gap-2 bg-[#ff5500] hover:bg-[#ff6e1f] text-white font-medium px-6 py-3.5 rounded-sm transition-colors duration-200"
              >
                Apply as Creator
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Avg. Earnings/Month', value: '$2,400', icon: TrendingUp },
                { label: 'Active Briefs', value: '340+', icon: Target },
                { label: 'Creator Network', value: '12K+', icon: Users },
                { label: 'Avg. Response Time', value: '< 4h', icon: Zap },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="border border-[#252729] p-6 rounded-sm bg-[#08090a]"
                  >
                    <Icon className="w-5 h-5 text-[#ff5500] mb-3" />
                    <p
                      className="font-display text-3xl font-black text-[#f0ede8] mb-1"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                    >
                      {item.value}
                    </p>
                    <p className="text-xs text-[#6b7280] uppercase tracking-wider">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────── */}
      <section id="pricing" className="py-28 px-6 md:px-10 bg-[#0f1012]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#ff5500] mb-3">Pricing</p>
            <h2
              className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-tight text-[#f0ede8]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
            >
              Simple pricing.
              <br />
              <span className="text-[#ff5500]">Real ROI.</span>
            </h2>
            <p className="mt-6 text-[#6b7280] max-w-sm mx-auto text-sm leading-relaxed">
              No retainers. No hidden fees. Pay per delivery and scale on your terms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#252729]">
            {[
              {
                name: 'Starter',
                price: '$499',
                period: '/month',
                desc: 'Perfect for testing UGC with your first campaign.',
                features: [
                  '10 UGC videos/month',
                  '3 creator slots',
                  '48h turnaround',
                  'Basic analytics',
                  'Email support',
                ],
                cta: 'Get Started',
                href: '/signup?plan=starter',
                highlight: false,
              },
              {
                name: 'Growth',
                price: '$1,299',
                period: '/month',
                desc: 'For brands scaling their content engine.',
                features: [
                  '30 UGC videos/month',
                  '10 creator slots',
                  '24h turnaround',
                  'Advanced analytics',
                  'Dedicated manager',
                  'Revision rounds',
                ],
                cta: 'Start Growing',
                href: '/signup?plan=growth',
                highlight: true,
              },
              {
                name: 'Scale',
                price: 'Custom',
                period: '',
                desc: 'Full-service UGC for high-volume brands.',
                features: [
                  'Unlimited videos',
                  'Unlimited creators',
                  'Priority turnaround',
                  'White-glove onboarding',
                  'Custom integrations',
                  'Dedicated account team',
                ],
                cta: 'Talk to Sales',
                href: '/contact',
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col p-10 ${
                  plan.highlight
                    ? 'bg-[#0f1012] ring-1 ring-[#ff5500]/60'
                    : 'bg-[#08090a]'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#ff5500] text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#ff5500] mb-2">
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-3">
                    <span
                      className="font-display text-5xl font-black text-[#f0ede8]"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[#6b7280] text-sm mb-2">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{plan.desc}</p>
                </div>

                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#9ca3af]">
                      <CheckCircle2 className="w-4 h-4 text-[#ff5500] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`inline-flex items-center justify-center gap-2 font-medium px-6 py-3.5 rounded-sm transition-all duration-200 text-sm ${
                    plan.highlight
                      ? 'bg-[#ff5500] hover:bg-[#ff6e1f] text-white'
                      : 'border border-[#252729] hover:border-[#ff5500]/40 text-[#f0ede8] hover:text-[#ff5500]'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#3d4147] uppercase tracking-widest mt-8">
            All plans include content licensing · Cancel anytime · No contracts
          </p>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-10 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,85,0,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#ff5500] mb-4">Get Started</p>
          <h2
            className="font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-none text-[#f0ede8] mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
          >
            Ready to
            <br />
            <span className="text-[#ff5500]">mobilize?</span>
          </h2>
          <p className="text-[#9ca3af] text-lg mb-12 max-w-md mx-auto leading-relaxed">
            Join 840+ brands already scaling their content with UGC Army.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 bg-[#ff5500] hover:bg-[#ff6e1f] text-white font-medium px-8 py-4 rounded-sm transition-colors duration-200 text-base"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 border border-[#252729] hover:border-[#ff5500]/40 text-[#9ca3af] hover:text-[#f0ede8] font-medium px-8 py-4 rounded-sm transition-colors duration-200 text-base"
            >
              Book a Demo
            </Link>
          </div>
          <p className="text-xs text-[#3d4147] mt-6 uppercase tracking-widest">
            No credit card required · Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
