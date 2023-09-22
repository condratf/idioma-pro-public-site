import { FC } from 'react'
import Link from 'next/link'
import { routes } from '@/routes'
// styles
import styles from './styles.module.scss'

export const Navigation: FC = () => {
  const links = Object.values(routes)
  return (
    <nav className={styles.nav}>
      {links.map(link => (
        <Link key={link} href={link} className={styles.link}>
          {link.replace('/', '')}
        </Link>
      ))}
    </nav>
  )
}
