import {AuthProvider} from '@/context/AuthContext'
import Layout from '@/components/Layout'
import Layout_React from '@/components/Layout_React'
import Layout_Javascript from '@/components/Layout_Javascript'
import Layout_Css from '@/components/Layout_Css'
import Layout_Portfolio from '@/components/Layout_Portfolio'
import Layout_Contact from '@/components/Layout_Contact'
import Layout_Home from '@/components/Layout_Home'
import Layout_Blog from '@/components/Layout_Blog'
import Layout_Search from '@/components/Layout_Search'
import '@/styles/styles.css'
import '@/styles/utilities.css'

function MyApp({ Component, pageProps, router }) {
  /* console.log(router.route);
  console.log((router.route.startsWith('/react'))); */

  if(router.route.startsWith('/react')) {
    return(
    <AuthProvider>
      <Layout_React>
        <Component {...pageProps} />
      </Layout_React>
    </AuthProvider>
    )
  }

  if(router.route.startsWith('/javascript')) {
    return(
    <AuthProvider>
      <Layout_Javascript>
        <Component {...pageProps} />
      </Layout_Javascript>
    </AuthProvider>
    )
  }

  if(router.route.startsWith('/css')) {
    return(
    <AuthProvider>
      <Layout_Css>
        <Component {...pageProps} />
      </Layout_Css>
    </AuthProvider>
    )
  }

  if(router.route.startsWith('/portfolio')) {
    return(
    <AuthProvider>
      <Layout_Portfolio>
        <Component {...pageProps} />
      </Layout_Portfolio>
    </AuthProvider>
    )
  }  

  if(router.route.startsWith('/contact')) {
    return(
    <AuthProvider>
      <Layout_Contact>
        <Component {...pageProps} />
      </Layout_Contact>
    </AuthProvider>
    )
  } 

  if(router.route.startsWith('/search')) {
    return(
    <AuthProvider>
      <Layout_Search>
        <Component {...pageProps} />
      </Layout_Search>
    </AuthProvider>
    )
  } 

  if(router.route.startsWith('/blog')) {
    return(
    <AuthProvider>
      <Layout_Blog>
        <Component {...pageProps} />
      </Layout_Blog>
    </AuthProvider>
    )
  } 
  
  if(router.route.startsWith('/account')) {
    return(
    <AuthProvider>
      <Layout_Home>
        <Component {...pageProps} />
      </Layout_Home>
    </AuthProvider>
    )
  }

  if(router.route.startsWith('/')) {
    return(
    <AuthProvider>
      <Layout_Home>
        <Component {...pageProps} />
      </Layout_Home>
    </AuthProvider>
    )
  } 
}

export default MyApp
