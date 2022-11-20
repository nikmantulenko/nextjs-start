import { observable, action } from 'mobx'

class PostStore {
  @observable post?: string
  @observable id?: string

  constructor(id: string) {
    this.post = 'post with id ' + id
    this.id = id
  }

  @action changePost(post: string) {
    this.post = post
  }

  async fetch(id) {
    this.setPost('post with id ' + id)
    this.setId(id)
  }


  @action setPost(post) {
    this.post = post;
  }

  @action setId(id) {
    this.id = id;
  }
}

export default PostStore