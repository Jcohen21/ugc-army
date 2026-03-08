'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Brands', href: '#for-brands' },
  { label: 'For Creators', href: '#for-creators' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#ff5500] to-transparent" />

      <nav
        className="relative flex items-center justify-between px-6 py-4 md:px-10"
        style={{ background: 'rgba(8, 9, 10, 0.85)', backdropFilter: 'blur(12px)' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 bg-[#ff5500] rounded-sm">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span
            className="font-display text-xl font-800 tracking-wider uppercase text-[#f0ede8]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '0.08em' }}
          >
            UGC <span className="text-[#ff5500]">Army</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6b7280] hover:text-[#f0ede8] transition-colors duration-200 tracking-wide uppercase"
              style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-[#6b7280] hover:text-[#f0ede8] transition-colors px-3 py-2"
            style={{ letterSpacing: '0.05em' }}
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-1.5 bg-[#ff5500] hover:bg-[#ff6e1f] text-white text-sm font-medium px-5 py-2.5 rounded-sm transition-colors duration-200"
            style={{ letterSpacing: '0.03em' }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#6b7280] hover:text-[#f0ede8] transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
        style={{ background: 'rgba(8, 9, 10, 0.97)', backdropFilter: 'blur(12px)' }}
      >
        <div className="px-6 py-6 flex flex-col gap-5 border-t border-[#252729]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#6b7280] hover:text-[#f0ede8] transition-colors uppercase tracking-wider text-sm"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-[#252729]">
            <Link
              href="/login"
              className="text-center py-2.5 border border-[#252729] text-sm text-[#6b7280] hover:text-[#f0ede8] hover:border-[#ff5500] transition-colors rounded-sm"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="text-center py-2.5 bg-[#ff5500] hover:bg-[#ff6e1f] text-white text-sm font-medium rounded-sm transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
