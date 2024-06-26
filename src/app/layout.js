import { Manrope } from 'next/font/google'
import './globals.css'

const font = Manrope({
  subsets: ['latin-ext'],
})

export const metadata = {
  title: 'NSUT Connect',
  description:
    'A chatbot to help you find information about Netaji Subhas  University',
  image: '/logo.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
