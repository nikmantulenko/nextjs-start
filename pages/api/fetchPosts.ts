import { promises as fs } from 'fs'
import path from 'path'

type PostList = Array<{
  id: string
  title: string
}>

export default async function fetchPosts(): Promise<PostList> {
  const dbFile = path.join(process.cwd(), 'db.json')
  const rawData = await fs.readFile(dbFile, { encoding: 'utf-8' })
  const data = JSON.parse(rawData)
  return data.posts.map((post: any) => ({
    id: String(post.id),
    title: String(post.title)
  }))
}
