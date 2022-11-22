import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import fetchPostDetails from '../api/fetchPostDetails'
import Layout from '../../components/layout'

type PostPageProps = {
  author: { name: string }
  id: string
  post?: { id: string, title: string, content: string }
}

export default function PostPage(props: PostPageProps) {
  return (
    <Layout name={props.author.name}>
      <Head>
        <title>{`Post ${props.id}`}</title>
      </Head>

      {props.post ? (
        <>
          <h1>{props.post.title}</h1>
          <p>{props.post.content}</p>
        </>
      ) : (
        <h1>NOT FOUND</h1>
      )}
    </Layout>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  if (typeof context.query.id !== 'string') throw new Error('unexpected query')

  return {
    props: {
      author: { name: 'Mykola' },
      id: context.query.id,
      post: await fetchPostDetails(context.query.id),
    },
  }
}
