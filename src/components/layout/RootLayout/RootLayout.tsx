import { FC, PropsWithChildren } from 'react'
// local
import { Navigation } from '../Navigation'
import { Footer } from '../Footer'
import { classNames } from '@/utils'
// styles
import styles from './styles.module.scss'

export const RootLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={classNames(styles.mainContainer, 'pageContent')}>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
