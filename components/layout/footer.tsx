import Link from 'next/link'
import { Zap } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'For Brands', href: '#for-brands' },
    { label: 'For Creators', href: '#for-creators' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-[#252729] bg-[#08090a]">
      {/* Top accent */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ff5500]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="flex items-center justify-center w-7 h-7 bg-[#ff5500] rounded-sm">
                <Zap className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span
                className="text-lg font-800 uppercase tracking-wider text-[#f0ede8]"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '0.08em' }}
              >
                UGC <span className="text-[#ff5500]">Army</span>
              </span>
            </Link>
            <p className="text-sm text-[#6b7280] leading-relaxed max-w-xs">
              The platform connecting forward-thinking brands with authentic UGC creators who deliver
              real results.
            </p>

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {['TW', 'IG', 'LI', 'TK'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-[#252729] flex items-center justify-center text-[10px] font-bold text-[#6b7280] hover:border-[#ff5500] hover:text-[#ff5500] transition-colors rounded-sm tracking-wider"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff5500] mb-4"
              >
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6b7280] hover:text-[#f0ede8] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-[#252729] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b7280]">
            © {new Date().getFullYear()} UGC Army. All rights reserved.
          </p>
          <p className="text-xs text-[#3d4147] uppercase tracking-widest">
            Built for creators. Powered by results.
          </p>
        </div>
      </div>
    </footer>
  )
}
