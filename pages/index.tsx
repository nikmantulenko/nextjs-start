import { observer } from 'mobx-react'
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import { useStore, PostsStoreHydration } from '../stores'
import utilStyles from '../styles/utils.module.sass'

type Author = {
  name: string
}
type HomeProps = {
  author: Author
  hydrationData: PostsStoreHydration
}

function Home(props: HomeProps) {
  const postsStore = useStore()

  const addPost = () => {
    postsStore.addNextPost({ id: String(postsStore.posts.length + 1), title: 'Next Post' })
  }

  return (
    <Layout name={props.author.name} home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m {props.author.name}</p>
        <button onClick={addPost}>add post</button>
        {postsStore.posts.map(post => (
          <h2 key={post.id} className={utilStyles.headingMd}>
            Read <Link href={`/posts/${post.id}`}>{post.title}!</Link>
          </h2>
        ))}
      </section>
    </Layout>
  )
}

Home.getInitialProps = async (): Promise<HomeProps> => {
  const posts = await Promise.resolve([{id: '1', title: 'First Post'}, {id: '2', title: 'Second Post'}])

  return {
    author: { name: 'Mykola' },
    hydrationData: { posts },
  }
}

export default observer(Home)
