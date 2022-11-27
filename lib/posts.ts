import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
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

export async function getPostDetails(id: string): Promise<any | null> {
  const fullPath = path.join(postsDirectory, id + '.md')
  try {
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      id,
      contentHtml,
      ...matterResult.data,
    }
  } catch (error) {
    return null
  }
}

export async function getAllPostIds(): Promise<string[]> {
  const fileNames = await fs.readdir(postsDirectory)
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''))
}
