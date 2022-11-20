import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.sass';

export default function Home(props) {
  return (
    <Layout name={props.user.name} home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m {props.user.name}</p>
        <p>And my User Agent is {props.userAgent}</p>
        <h2 className={utilStyles.headingMd}>Read <Link href={'/posts/1'}>First post!</Link></h2>
        <h2 className={utilStyles.headingMd}>Read <Link href={'/posts/2'}>Second post!</Link></h2>
      </section>
    </Layout>
  )
}

Home.getInitialProps = async (context) => {
  return {
    user: {
      name: 'Mykola',
    },
    userAgent: context.req ? context.req.headers['user-agent'] : window.navigator.userAgent,
  }
}

