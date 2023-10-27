import './globals.css'
import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'wafflesncream | Official Site',
  description: 'wafflesncream',
}

export default function RootLayout({ children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={garamond.className}>{children}</body>
    </html>
  )
}
