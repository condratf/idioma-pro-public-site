import { FC } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
//local
import { routeLinks } from '@/routes'
import { classNames } from '@/utils'
import { getFooterInfo } from './helpers'
//styles
import styles from './styles.module.scss'

export const Footer: FC = () => {
  const t = useTranslations('Layout')
  const info = getFooterInfo()

  return (
    <footer className={classNames(styles.footer, 'pageFooter')}>

      <div className={styles.column}>
        {routeLinks.map(link => (
          <Link key={link} href={link} className={styles.link}>
            {
              t(`Footer.${link.replace('/', '')}`)
            }
          </Link>
        ))}
      </div>

      <div className={styles.column}>
        {info.map(item => (
          <div key={item} className={classNames(styles.link, styles.linkInfo)}>
            {item}
          </div>
        ))}
      </div>
    </footer>
  )
}
