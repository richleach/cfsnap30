import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import HeaderContact from './HeaderContact'
import Nav from './Nav'

function Layout({children}) {
    return (
        <>
            <Nav />
            <HeaderContact />
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