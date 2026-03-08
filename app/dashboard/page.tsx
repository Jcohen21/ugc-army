import { ShoppingBag, TrendingUp, DollarSign, Clock, ArrowUpRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Mock data — will be replaced with real Prisma queries after UGC-4 (auth) and UGC-5 (Stripe)
const mockUser = { name: 'Alex Morgan' }

const stats = [
  {
    label: 'Total Orders',
    value: '24',
    change: '+3 this month',
    up: true,
    icon: ShoppingBag,
  },
  {
    label: 'Active Campaigns',
    value: '5',
    change: '2 in review',
    up: true,
    icon: TrendingUp,
  },
  {
    label: 'Total Spent',
    value: '$8,420',
    change: '+$1,299 this month',
    up: true,
    icon: DollarSign,
  },
  {
    label: 'Avg. Turnaround',
    value: '31h',
    change: '↓ 6h vs last month',
    up: true,
    icon: Clock,
  },
]

const recentOrders = [
  {
    id: 'ORD-1041',
    campaign: 'Summer Skincare Launch',
    creator: 'Jenna R.',
    amount: '$349',
    status: 'delivered',
    date: 'Mar 6, 2026',
  },
  {
    id: 'ORD-1040',
    campaign: 'App Install Push',
    creator: 'Marcus T.',
    amount: '$199',
    status: 'in_review',
    date: 'Mar 5, 2026',
  },
  {
    id: 'ORD-1039',
    campaign: 'Summer Skincare Launch',
    creator: 'Priya M.',
    amount: '$349',
    status: 'delivered',
    date: 'Mar 4, 2026',
  },
  {
    id: 'ORD-1038',
    campaign: 'Holiday Gift Guide',
    creator: 'Sam K.',
    amount: '$499',
    status: 'delivered',
    date: 'Mar 2, 2026',
  },
  {
    id: 'ORD-1037',
    campaign: 'App Install Push',
    creator: 'Leo V.',
    amount: '$199',
    status: 'pending',
    date: 'Mar 1, 2026',
  },
]

const statusStyles: Record<string, string> = {
  delivered: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  in_review: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  pending: 'bg-[#252729] text-[#6b7280] border-[#2e3035]',
}

const statusLabels: Record<string, string> = {
  delivered: 'Delivered',
  in_review: 'In Review',
  pending: 'Pending',
}

export default function DashboardPage() {
  return (
    <div className="px-6 md:px-10 py-8 md:py-12 max-w-6xl">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#ff5500] mb-2">Dashboard</p>
        <h1
          className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-tight text-[#f0ede8]"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
        >
          Welcome back,
          <br />
          <span className="text-[#ff5500]">{mockUser.name}.</span>
        </h1>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="border border-[#252729] bg-[#0f1012] p-6 rounded-sm group hover:border-[#ff5500]/30 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <Icon className="w-4 h-4 text-[#ff5500]" />
                {stat.up && <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />}
              </div>
              <p
                className="font-display text-[2rem] font-black text-[#f0ede8] leading-none mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}
              >
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#6b7280] mb-2">
                {stat.label}
              </p>
              <p className="text-xs text-[#3d4147]">{stat.change}</p>
            </div>
          )
        })}
      </div>

      {/* Recent orders */}
      <div className="border border-[#252729] rounded-sm overflow-hidden bg-[#0f1012]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#252729]">
          <h2
            className="font-display text-lg font-bold uppercase text-[#f0ede8] tracking-wide"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            Recent Orders
          </h2>
          <Link
            href="/dashboard/campaigns"
            className="text-xs text-[#ff5500] hover:text-[#ff6e1f] flex items-center gap-1 transition-colors uppercase tracking-wider"
          >
            View all
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#252729]">
                {['Order', 'Campaign', 'Creator', 'Amount', 'Status', 'Date'].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-[10px] uppercase tracking-[0.15em] text-[#6b7280] font-medium"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr
                  key={order.id}
                  className={`border-b border-[#252729] hover:bg-[#1c1e21]/40 transition-colors duration-100 ${
                    i === recentOrders.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="px-6 py-4 font-mono text-xs text-[#6b7280]">{order.id}</td>
                  <td className="px-6 py-4 text-[#f0ede8] text-sm">{order.campaign}</td>
                  <td className="px-6 py-4 text-[#9ca3af] text-sm">{order.creator}</td>
                  <td className="px-6 py-4 text-[#f0ede8] font-medium text-sm">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-[10px] uppercase tracking-wider font-medium border ${
                        statusStyles[order.status]
                      }`}
                    >
                      {statusLabels[order.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6b7280] text-xs">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/dashboard/campaigns/new"
          className="group flex items-center justify-between border border-[#252729] hover:border-[#ff5500]/40 bg-[#0f1012] px-6 py-5 rounded-sm transition-colors duration-200"
        >
          <div>
            <p className="text-sm font-medium text-[#f0ede8] mb-1">Launch a Campaign</p>
            <p className="text-xs text-[#6b7280]">Post a brief and get matched with creators</p>
          </div>
          <ArrowRight className="w-4 h-4 text-[#ff5500] group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/pricing"
          className="group flex items-center justify-between border border-[#252729] hover:border-[#ff5500]/40 bg-[#0f1012] px-6 py-5 rounded-sm transition-colors duration-200"
        >
          <div>
            <p className="text-sm font-medium text-[#f0ede8] mb-1">Upgrade Plan</p>
            <p className="text-xs text-[#6b7280]">Get more videos, faster turnaround</p>
          </div>
          <ArrowRight className="w-4 h-4 text-[#ff5500] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
