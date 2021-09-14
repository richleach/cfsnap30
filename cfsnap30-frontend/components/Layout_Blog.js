import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import HeaderBlog from './HeaderBlog'
import Nav from './Nav'

function Layout({children}) {
    return (
        <>
            <Nav />
            <HeaderBlog />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <Footer />
        </>
        
    )
}

export default Layout
