import { FC } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
// local
import { routeLinks } from '@/routes'
import { classNames } from '@/utils'
// styles
import styles from './styles.module.scss'


export const Navigation: FC = () => {
  const t = useTranslations('Layout')

  return (
    <nav className={classNames(styles.nav, 'z-20')}>
      {routeLinks.map(link => (
        <Link key={link} href={link} className={styles.link}>
          {
            t(`Header.${link.replace('/', '')}`)
          }
        </Link>
      ))} 
    </nav>
  )
}