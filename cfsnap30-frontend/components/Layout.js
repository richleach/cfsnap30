import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

function Layout({children}) {
    return (
        <>
            <Nav />
            <Header />
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