import '../styles/Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className='header-wrapper'>
            <div className="logo">
                ANNA KAKAMA
            </div>
            <nav className='nav-menu'>
                <ul className='link-wrapper'>
                    <a href='https://www.speedtest.net/result/15683546164' alt ='home' className='home-link'>Home</a>
                    <a href='https://www.speedtest.net/result/15683546164' alt ='portfolio' className='portfolio-link'>Portfolio</a>
                    <Link className='contact-link' to='Contact'>Contact</Link>
                </ul>
            </nav>
        </header>
    )
}