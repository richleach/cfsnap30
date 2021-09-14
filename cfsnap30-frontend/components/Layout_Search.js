import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import HeaderSearch from './HeaderSearch'
import Nav from './Nav'

function Layout({children}) {
    return (
        <>
            <Nav />
            <HeaderSearch />
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