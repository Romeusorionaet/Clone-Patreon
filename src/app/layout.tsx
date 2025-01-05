import ClientProviders from '@/utils/client-providers'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import '../assets/styles/base/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '900'],
})

export const metadata: Metadata = {
  title: 'Clone Patreon',
  description: 'Patreon clonado por Romeu soares desenvolvedor web',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} antialiased`}>
        <ClientProviders>
          <Header />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
