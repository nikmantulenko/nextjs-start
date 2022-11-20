import Head from 'next/head'
import Layout from '../../components/layout'

type Author = {
  name: string
}
type PostPageProps = {
  author: Author
  id: string
  post?: { id: string, title: string }
}

export default function PostPage(props: PostPageProps) {
  return (
    <Layout home={false} name={props.author.name}>
      <Head>
        <title>{`Post ${props.id}`}</title>
      </Head>

      {props.post ? (
        <h1>{props.post.title}</h1>
      ) : (
        <h1>NOT FOUND</h1>
      )}
    </Layout>
  )
}

PostPage.getInitialProps = async ({ query }: { query: { id: string } }): Promise<PostPageProps> => {
  const posts = await Promise.resolve([{id: '1', title: 'First Post'}, {id: '2', title: 'Second Post'}])
  const post = posts.find(post => post.id === query.id)

  return {
    author: { name: 'Mykola' },
    id: query.id,
    post,
  }
}
