import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../assets/styles/globals.css'
import { Header } from '@/components/dashboard/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '900'],
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
        <Header />
        {children}
      </body>
    </html>
  )
}
