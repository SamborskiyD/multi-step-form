import '@/styles/globals.scss'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Multi step form',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
