import { promises as fs } from 'fs'
import path from 'path'

type Post = {
  id: string
  title: string
  content: string
}

export default async function fetchPostDetails(postId: string): Promise<Post | null> {
  const dbFile = path.join(process.cwd(), 'db.json')
  const rawData = await fs.readFile(dbFile, { encoding: 'utf-8' })
  const data = JSON.parse(rawData)

  const post = data.posts.find((post: any) => post.id === postId)
  if (post == null) return null
  return {
    id: String(post.id),
    title: String(post.title),
    content: String(post.content),
  }
}