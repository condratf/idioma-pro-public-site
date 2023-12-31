import { PropsWithChildren } from 'react';
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { Montserrat } from 'next/font/google'
// local
import { RootLayout } from '@/components/layout'
import { isValidLocale } from '@/locales';
// styles
import '../../styles/globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Ale lo tres',
  description: 'description',
}

export default function Layout({children} : PropsWithChildren<{}>) {
  const locale = useLocale()
  if (!isValidLocale(locale)) notFound()

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}
