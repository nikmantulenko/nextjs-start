import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import sortBy from '../utils/sortBy'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData() {
  const fileNames = await fs.readdir(postsDirectory)

  const postsData = await Promise.all(fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  }))

  return sortBy(postsData, 'date')
}