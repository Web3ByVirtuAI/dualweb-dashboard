import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'

// Load fonts with CSS variable mapping
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'DualWeb Dashboard',
  description: 'Seamless Navigation Between Web2 and Web3 Worlds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background text-primary font-body ${inter.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
