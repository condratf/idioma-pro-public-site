import { FC, PropsWithChildren } from 'react'
import { Navigation } from '../Navigation'
import { Footer } from '../Footer'
// styles
import styles from './styles.module.scss'

export const RootLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.mainContainer}>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
