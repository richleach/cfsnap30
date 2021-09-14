import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import HeaderJavascript from './HeaderJavascript'
import Nav from './Nav'

function Layout({children}) {
    return (
        <>
            <Nav />
            <HeaderJavascript />
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
