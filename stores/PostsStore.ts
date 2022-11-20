import { makeAutoObservable, action } from 'mobx'

export type PostsStoreHydration = {
  posts: Array<{ id: string, title: string }>
}

export default class PostsStore {
  posts: Array<{ id: string, title: string }> = []

  constructor() {
    makeAutoObservable(this)
  }

  hydrate(data: PostsStoreHydration) {
    this.posts = data.posts
  }

  @action addNextPost(post: { id: string, title: string }) {
    this.posts.push(post)
  }
}