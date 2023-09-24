import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// local
import { availableLocales } from '@/locales'
import { routes } from '@/routes'
// styles
import styles from './styles.module.scss'
// assets
import en from './assets/uk.svg'
import ru from './assets/ru.svg'
import es from './assets/es.svg'


const flags = { en, ru, es };

export const ChooseLocale: FC = () => (
  <div className={styles.container}>
    {availableLocales.map(locale => (
      <Link key={locale} href={`/${locale}/${routes.Home}`} >
        {locale}
        <Image width={25} height={17} src={flags[locale as 'en' | 'es' | 'ru']} alt={locale} />
      </Link>
    ))}
  </div>
)