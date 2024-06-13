import React, { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {

    const menuOpen = {
        right: '0px',
    }

    const menuClosed = {
        right: '-250px',
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    let links;
    useEffect(() => {
        links = document.querySelectorAll('.menu-link');
    }, [isMenuOpen])

    const activateLink = (e) => {
        links.forEach(link => {
            link.className = "menu-link";
        })
        e.target.className = "menu-link active";
    }

    const menuDisplay = () => {
        if(!isMenuOpen) {
            setIsMenuOpen(true);
        } else{
            setIsMenuOpen(false);
        }
    }

    return (
        <div className="navbar">
            <a href="#home"><div className="logo">Robson <span>Ribeiro</span></div></a>
            <div className="navbar-menu">
                <a href="#home" className="menu-link active" onClick={activateLink}>Home</a>
                <a href="#education" className="menu-link" onClick={activateLink}>Journey</a>
                <a href="#projects" className="menu-link" onClick={activateLink}>Projects</a>
                <a href="#contact" className="menu-link" onClick={activateLink}>Contact</a>
            </div>
            <div className="compact-menu" onClick={menuDisplay}>
                <svg viewBox="0 0 700 1000" fill="currentColor" height="1em" width="1em">
                    <path d="M650 450c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 513.333 0 500c0-13.333 4.667-25 14-35s21.333-15 36-15h600M50 350c-13.333 0-25-5-35-15S0 313.333 0 300c0-13.333 4.667-25 14-35s21.333-15 36-15h600c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50m600 300c14.667 0 26.667 5 36 15 9.333 10 14 21.667 14 35 0 13.333-5 25-15 35s-21.667 15-35 15H50c-13.333 0-25-5-35-15S0 713.333 0 700c0-13.333 4.667-25 14-35s21.333-15 36-15h600" />
                </svg>
            </div>
            <div className="sidebar" style={isMenuOpen ? menuOpen : menuClosed} >
                <button onClick={menuDisplay}>
                    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
                        <path d="M19 3H5a2 2 0 00-2 2V19a2 2 0 002 2H19a2 2 0 002-2V5a2 2 0 00-2-2m-3.4 14L12 13.4 8.4 17 7 15.6l3.6-3.6L7 8.4 8.4 7l3.6 3.6L15.6 7 17 8.4 13.4 12l3.6 3.6-1.4 1.4z" />
                    </svg>
                </button>
                <a href="#home" className="sidebar-link" onClick={menuDisplay}>Home</a>
                <a href="#education" className="sidebar-link" onClick={menuDisplay}>Journey</a>
                <a href="#projects" className="sidebar-link" onClick={menuDisplay}>Projects</a>
                <a href="#contact" className="sidebar-link" onClick={menuDisplay}>Contact</a>
            </div>
        </div>
    )
}

export default Navbar;
