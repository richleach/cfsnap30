import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import HeaderReact from './HeaderReact'
import Nav from './Nav'

function Layout({children}) {
    return (
        <>
            <Nav />
            <HeaderReact />
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
