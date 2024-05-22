import React, { useEffect } from "react";
import './Navbar.css';

const Navbar = () => {

    let links;
    useEffect(() => {
        links = document.querySelectorAll('.menu-link');
    }, [])

    const activateLink = (e) => {
        links.forEach(link => {
            link.className = "menu-link";
        })
        e.target.className = "menu-link active";
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
        </div>
    )
}

export default Navbar;