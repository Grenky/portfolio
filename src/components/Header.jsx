import '../styles/Header.css';


export default function Header() {
    return(
        <header className='header-wrapper'>
            <div className="logo">
                ANNA KAKAMA
            </div>
            <nav className='nav-menu'>
                <ul className='link-wrapper'>
                    <a href='#' alt ='home' className='home-link'>Home</a>
                    <a href='#' alt ='portfolio' className='portfolio-link'>Portfolio</a>
                    <a href='#' alt ='contact' className='contact-link'>Contact</a>
                </ul>
            </nav>
        </header>
    )
}