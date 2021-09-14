import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import HeaderPortfolio from './HeaderPortfolio'
import Nav from './Nav'

function Layout({children}) {
    return (
        <>
            <Nav />
            <HeaderPortfolio />
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
