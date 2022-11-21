import AuthorStore, { AuthorStoreHydration } from './AuthorStore'
import PostsStore, { PostsStoreHydration } from './PostsStore'

export type RootStoreHydration = {
  authorStore?: AuthorStoreHydration
  postsStore?: PostsStoreHydration
};

export default class RootStore {
  postsStore = new PostsStore
  authorStore = new AuthorStore

  hydrate(data: RootStoreHydration) {
    if (data.postsStore) this.postsStore.hydrate(data.postsStore)
    if (data.authorStore) this.authorStore.hydrate(data.authorStore)
  }
}