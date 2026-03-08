import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'UGC Army — Connect Brands with Authentic Creators',
  description:
    'UGC Army is the platform connecting forward-thinking brands with authentic UGC creators who deliver real results.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
