'use client'

import { useState, FormEvent } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Zap, Loader2 } from 'lucide-react'
import { Suspense } from 'react'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') ?? '/dashboard'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    setLoading(false)

    if (res?.error) {
      setError('Invalid email or password.')
      return
    }

    router.push(callbackUrl)
    router.refresh()
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: '#08090a' }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 justify-center mb-10">
          <div className="flex items-center justify-center w-8 h-8 bg-[#ff5500] rounded-sm">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span
            className="text-xl uppercase tracking-widest text-[#f0ede8]"
            style={{ fontWeight: 800, letterSpacing: '0.08em' }}
          >
            UGC <span className="text-[#ff5500]">Army</span>
          </span>
        </Link>

        {/* Card */}
        <div className="border border-[#252729] bg-[#0f1012] rounded-sm p-8">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#ff5500] mb-2">
              Welcome back
            </p>
            <h1 className="text-2xl font-bold text-[#f0ede8] tracking-tight">Sign in</h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#6b7280] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full bg-[#1c1e21] border border-[#252729] text-[#f0ede8] placeholder-[#3d4147] text-sm rounded-sm px-4 py-3 outline-none focus:border-[#ff5500] transition-colors duration-200"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#6b7280] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full bg-[#1c1e21] border border-[#252729] text-[#f0ede8] placeholder-[#3d4147] text-sm rounded-sm px-4 py-3 outline-none focus:border-[#ff5500] transition-colors duration-200"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-sm px-3 py-2.5">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex items-center justify-center gap-2 bg-[#ff5500] hover:bg-[#ff6e1f] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium rounded-sm px-5 py-3 transition-colors duration-200"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-[#6b7280]">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-[#ff5500] hover:text-[#ff6e1f] transition-colors">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
