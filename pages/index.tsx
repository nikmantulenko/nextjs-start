// import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import Head from 'next/head';
// import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.sass'

type HomeProps = {
  author: {
    name: string
  }
  postsData: Array<{
    id: string
    title: string
    date: string
  }>
}

function Home(props: HomeProps) {
// function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout name={props.author.name} home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m {props.author.name}</p>
        {/*{props.posts.map(post => (*/}
        {/*  <h2 key={post.id} className={utilStyles.headingMd}>*/}
        {/*    Read <Link href={`/posts/${post.id}`}>{post.title}!</Link>*/}
        {/*  </h2>*/}
        {/*))}*/}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {props.postsData.map(post => (
              <li className={utilStyles.listItem} key={post.id}>
                {post.title}
                <br />
                {post.id}
                <br />
                {post.date}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const postsData = await getSortedPostsData()

  return {
    props: {
      author: { name: 'Mykola' },
      postsData,
    }
  }
}

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   return {
//     props: {
//       posts: await fetchPosts(),
//       author: { name: 'Mykola' },
//     },
//   }
// }

export default Home
