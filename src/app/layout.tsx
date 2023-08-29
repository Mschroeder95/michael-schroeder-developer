import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { DEVELOPER_NAME } from './app-config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: DEVELOPER_NAME,
  description: DEVELOPER_NAME,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
