import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/layout/Navigation'
import '@/styles/globals.css'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`w-full min-h-screen ${inter.className}`}>
      <Navigation />
      <Header />
      <main className="py-8 flex flex-col gap-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
