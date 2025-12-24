import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Rahul Arora | Frontend Developer",
  description:
    "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Building beautiful, performant web applications.",
  keywords: "Frontend Developer, React Developer, Next.js, JavaScript, Web Development, UI/UX",
  authors: [{ name: "Rahul Arora" }],
  creator: "Rahul Arora",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahularora.dev",
    title: "Rahul Arora | Frontend Developer",
    description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Rahul Arora Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Arora | Frontend Developer",
    description: "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies.",
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6495ed" },
    { media: "(prefers-color-scheme: dark)", color: "#3a5ba0" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
