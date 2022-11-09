import '../styles/globals.css'
import '../styles/nav.css'
import '../styles/hero.css'
import '../styles/blog.css'
import '../styles/blog-post.css'
import '../styles/promotion-block.css'
import '../styles/footer.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
