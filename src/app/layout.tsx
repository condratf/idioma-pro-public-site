import { Montserrat } from 'next/font/google'
// local
import { RootLayout } from '@/components/layout'
// styles
import '../styles/globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Ale lo tres',
  description: 'description',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}
