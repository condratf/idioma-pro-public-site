import { FC } from 'react'
import Link from 'next/link'
// local
import { routeLinks } from '@/routes'
import { classNames } from '@/utils'
// styles
import styles from './styles.module.scss'

export const Navigation: FC = () =>  (
  <nav className={classNames(styles.nav, 'z-20')}>
    {routeLinks.map(link => (
      <Link key={link} href={link} className={styles.link}>
        {link.replace('/', '')}
      </Link>
    ))}
  </nav>
)
