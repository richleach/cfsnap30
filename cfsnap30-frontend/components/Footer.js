function getYear() {
    return new Date().getFullYear()
}

function Footer() {
    return (
        <footer className="footer bg-dark py-1 text-center">
            Copyright &copy; {getYear()} cfsnap.com.  All Rights Reserved.
        </footer>
    )
}

export default Footer
