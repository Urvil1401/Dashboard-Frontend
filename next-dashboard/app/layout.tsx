import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dashboard - Modern Analytics',
  description: 'A beautiful modern dashboard with analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}