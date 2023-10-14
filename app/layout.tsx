import './globals.css'
import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const font1 = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Andrew | Personal Portfolio',
  description: 'Focused on Integration, Sales Engineering, SaaS, and AI with over 25 years of experience in the technology field.',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${font1.className} text-slate-300 relative`}>       
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
        <Analytics />
      </body>
    </html>
  )
}
