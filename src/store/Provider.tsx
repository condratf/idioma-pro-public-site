"use client"

import { Provider } from 'react-redux'
import { FC, PropsWithChildren } from 'react'
import { store } from '.'

const StoreProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider