import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>John's Blog</h1>
    <ul>
      <PostLink id="hello" title="Hello Next.js"/>
      <PostLink id="learn" title="Learn Next.js is awesome"/>
      <PostLink id="deploy" title="Deploy apps with Azure"/>
      <PostLink id="export" title="Export apps"/>
    </ul>
  </Layout>
)
