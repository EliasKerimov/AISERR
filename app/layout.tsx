import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AISERR',
  description: 'AI Senior Engineer Resume Reviewer',
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
