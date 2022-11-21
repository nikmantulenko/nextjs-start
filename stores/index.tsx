import React, { useContext, ReactNode } from 'react'
import { enableStaticRendering } from 'mobx-react'
import RootStore, { RootStoreHydration } from './RootStore'
import isServer from '../utils/isServer'

enableStaticRendering(isServer)

export type { RootStoreHydration }

let store: RootStore

// read about store duplication
export function getStore(data?: RootStoreHydration) {
  if (store == null) store = new RootStore()
  if (data) store.hydrate(data)
  return store
}

const StoreContext = React.createContext<RootStore | null>(null)

export function StoreProvider(props: { children: ReactNode, hydrationData?: RootStoreHydration }) {
  const store = getStore(props.hydrationData)

  return (
    <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
  )
}

export function useStore(): RootStore {
  const store = useContext(StoreContext)
  if (store == null) throw new Error('[useStore] Context has not been provided.')
  return store
}