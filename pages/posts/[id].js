import Head from 'next/head'
import Layout from '../../components/layout'
import { useMobxStores } from '../../stores'

export default function PostPage(props) {
  const { postStore } = useMobxStores()

  return (
    <Layout name={props.user.name}>
      <Head>
        <title>{`Post ${postStore.id}`}</title>
      </Head>

      <h1>{postStore.post}</h1>
    </Layout>
  )
}

PostPage.getInitialProps = async ({ mobxStores: { postStore }, query }) => {
  await postStore.fetch(query.id)

  return {
    user: {
      name: 'Mykola',
    },
    id: query.id,
  }
}
