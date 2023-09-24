import { FC } from 'react'
// import Link from 'next/link'
import { useTranslations } from 'next-intl'
// local
import { AnimatedLink, ChooseLocale } from '@/components/shared'
import { routeLinks } from '@/routes'
import { classNames } from '@/utils'
// styles
import styles from './styles.module.scss'


export const Navigation: FC = () => {
  const t = useTranslations('Layout')

  return (
    <nav className={classNames(styles.nav, 'z-20', 'pageHeader')}>
      {routeLinks.map(link => (
        <AnimatedLink key={link} href={link} className={styles.link}>
          {
            t(`Header.${link.replace('/', '')}`)
          }
        </AnimatedLink>
      ))}

      <ChooseLocale />
    </nav>
  )
}