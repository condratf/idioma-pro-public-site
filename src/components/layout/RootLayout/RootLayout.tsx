import { FC, PropsWithChildren } from 'react'
import { Navigation } from '../Navigation'

export const RootLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='main-container'>
      <Navigation />
      {children}
    </div>
  )
}
