import { FC } from 'react'
import Link from 'next/link'
//local
import { routeLinks } from '@/routes'
//styles
import styles from './styles.module.scss'
import { classNames } from '@/utils'

export const Footer: FC = () => {
  const info = ['Alejandra López', 'Moscow', '+3499999999']
  return (
    <footer className={styles.footer}>

      <div className={styles.column}>
        {routeLinks.map(link => (
          <Link key={link} href={link} className={styles.link}>
            {link.replace('/', '')}
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
