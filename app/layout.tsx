import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ebin Amson - Full-Stack Developer",
  description:
    "Full-stack developer skilled in MERN stack and AI-powered applications. Experienced in building scalable web solutions with Next.js and backend optimization.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased bg-[#0B0B0B]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
