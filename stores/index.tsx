import React, { useContext, ReactNode } from 'react'
import { enableStaticRendering } from 'mobx-react'
import PostsStore, { PostsStoreHydration } from './PostsStore'
import isServer from '../utils/isServer'

enableStaticRendering(isServer)

export type { PostsStoreHydration }

let store: PostsStore

// read about store duplication
export function getStore(data?: PostsStoreHydration) {
  if (store == null) store = new PostsStore()
  if (data) store.hydrate(data)
  return store
}

const StoreContext = React.createContext<PostsStore>(null as any)

export function StoreProvider(props: { children: ReactNode, hydrationData?: PostsStoreHydration }) {
  const store = getStore(props.hydrationData)

  return (
    <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
  )
}

export function useStore(): PostsStore {
  return useContext(StoreContext)
}