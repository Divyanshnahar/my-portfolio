import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Divyansh Nahar — Full Stack & ML Engineer',
  description: 'Full Stack Engineer & ML Practitioner building intelligent systems — from LLM pipelines to production-ready backends.',
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