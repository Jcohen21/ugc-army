import Link from 'next/link'
import { LayoutDashboard, ShoppingBag, BarChart2, Settings, Zap, LogOut } from 'lucide-react'

const sidebarNav = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Campaigns', href: '/dashboard/campaigns', icon: ShoppingBag },
  { label: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#08090a] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 border-r border-[#252729] bg-[#08090a] fixed inset-y-0 left-0 z-40">
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-6 py-5 border-b border-[#252729]">
          <div className="flex items-center justify-center w-7 h-7 bg-[#ff5500] rounded-sm">
            <Zap className="w-3.5 h-3.5 text-white fill-white" />
          </div>
          <span
            className="text-base uppercase tracking-wider text-[#f0ede8]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '0.08em' }}
          >
            UGC <span className="text-[#ff5500]">Army</span>
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-6 flex flex-col gap-1">
          {sidebarNav.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-[#6b7280] hover:text-[#f0ede8] hover:bg-[#1c1e21] transition-colors duration-150 group"
            >
              <Icon className="w-4 h-4 group-hover:text-[#ff5500] transition-colors" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-3 py-4 border-t border-[#252729]">
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm text-[#6b7280] hover:text-[#f0ede8] hover:bg-[#1c1e21] transition-colors duration-150 group w-full"
          >
            <LogOut className="w-4 h-4 group-hover:text-[#ff5500] transition-colors" />
            Sign out
          </Link>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between px-5 py-4 border-b border-[#252729] bg-[#08090a]">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-7 h-7 bg-[#ff5500] rounded-sm">
            <Zap className="w-3.5 h-3.5 text-white fill-white" />
          </div>
          <span
            className="text-base uppercase tracking-wider text-[#f0ede8]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            UGC <span className="text-[#ff5500]">Army</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {sidebarNav.map(({ href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="p-2 text-[#6b7280] hover:text-[#ff5500] transition-colors"
            >
              <Icon className="w-4 h-4" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-60 pt-0 md:pt-0">
        <div className="pt-[57px] md:pt-0">{children}</div>
      </div>
    </div>
  )
}
