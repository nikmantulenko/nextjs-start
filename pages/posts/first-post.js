import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost(props) {
  return (
    <Layout name={props.user.name}>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
    </Layout>
  )
}

FirstPost.getInitialProps = async () => {
  return {
    user: {
      name: 'Mykola',
    },
  }
}
