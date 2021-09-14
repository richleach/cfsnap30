import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import HeaderCss from './HeaderCss'
import Nav from './Nav'

function Layout({children}) {
    return (
        <>
            <Nav />
            <HeaderCss />
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