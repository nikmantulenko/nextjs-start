import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.sass'

type HomeProps = {
  posts: Array<{id: string, title: string}>
  author: { name: string }
}

function Home(props: HomeProps) {
  return (
    <Layout name={props.author.name} home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m {props.author.name}</p>
        {props.posts.map(post => (
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
    posts,
    author: { name: 'Mykola' },
  }
}

export default Home
