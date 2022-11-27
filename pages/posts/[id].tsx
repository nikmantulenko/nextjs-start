// import { GetServerSidePropsContext } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
// import fetchPostDetails from '../api/fetchPostDetails'
import { getAllPostIds, getPostDetails } from '../../lib/posts'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.sass'

// type PostPageProps = {
//   author: { name: string }
//   id: string
//   post?: { id: string, title: string, content: string }
// }

type PostPageProps = {
  author: { name: string }
  postDetails: any
}

export default function PostPage(props: PostPageProps) {
  return (
    <Layout name={props.author.name}>
      <Head>
        <title>{props.postDetails.title}</title>
        {/*<title>{`Post ${props.id}`}</title>*/}
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{props.postDetails.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={props.postDetails.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.postDetails.contentHtml }} />
      </article>

      {/*{props.post ? (*/}
      {/*  <>*/}
      {/*    <h1>{props.post.title}</h1>*/}
      {/*    <p>{props.post.content}</p>*/}
      {/*  </>*/}
      {/*) : (*/}
      {/*  <h1>NOT FOUND</h1>*/}
      {/*)}*/}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postIds = await getAllPostIds()

  return {
    paths: postIds.map(id => ({ params: { id } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  if (params == null) return { notFound: true }
  const postDetails = await getPostDetails(params.id)
  if (postDetails == null) return { notFound: true }

  return {
    props: {
      author: { name: 'Mykola' },
      postDetails,
    }
  }
}

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   if (typeof context.query.id !== 'string') throw new Error('unexpected query')
//
//   return {
//     props: {
//       author: { name: 'Mykola' },
//       id: context.query.id,
//       post: await fetchPostDetails(context.query.id),
//     },
//   }
// }
