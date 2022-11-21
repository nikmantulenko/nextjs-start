import { makeAutoObservable } from 'mobx'

export type AuthorStoreHydration = {
  name: string
}

export default class AuthorStore {
  name: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  hydrate(data: AuthorStoreHydration) {
    this.name = data.name
  }
}
