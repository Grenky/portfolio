import '../styles/Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className='header-wrapper'>
            <div className="logo">
                <Link className='home-link' to='FrontPage'>ANNA KAKAMA</Link>
            </div>
            <nav className='nav-menu'>
                <ul className='link-wrapper'>
                    <Link className='home-link' alt ='home' to='FrontPage'>Home</Link>
                    <Link className='portfolio-link' alt ='portfolio' to='Portfolio'>Portfolio</Link>
                    <Link className='contact-link' to='Contact'>Contact</Link>
                </ul>
            </nav>
        </header>
    )
}