import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import fetchPosts from './api/fetchPosts'
import utilStyles from '../styles/utils.module.sass'

function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {
      posts: await fetchPosts(),
      author: { name: 'Mykola' },
    },
  }
}

export default Home
