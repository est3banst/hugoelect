import { useState } from "react"
import { Link } from 'react-router-dom'
import '../assets/Nav.css'
import { useTypingEffect } from "./hooks/useTypingEffect"
import { useInView } from 'react-intersection-observer'


const Nav = () => {

    const { ref: titleRef, inView: isTitleVisible } = useInView();

    
    const [isOpen, setItOpen] = useState(false);
    const menuIco = isOpen ? 'open' : '';
    
    const displayMenu = isOpen ? 'header-ul-visible' : 'header-ul';
    const settingOpen = () => {
        setItOpen(!isOpen)
    }
    const titletext = useTypingEffect("SERVICIO TÉCNICO ESPECIALIZADO", 100);
    
    return (
        <>
        <header className='title-container'>
        <div className='header-container'>
            <span className='logo-container'>
            <img src='/imgs/saltologo.png' alt='brand logo' className='saltologo' />
            </span>
            <h1 ref={titleRef} data-glitch='SALTO INSTALACIONES' className={`heading-salto ${isTitleVisible ? 'reveal-title' : ''}`}>
            SALTO INSTALACIONES
            
            </h1>
           </div>
           <small className='small-salto'>{titletext}</small>
           <div className='header-icons'>
            
           
             <div id="nav-icon1" className={menuIco} onClick={settingOpen}>
                <span></span>
                <span></span>
                <span></span>
            </div> 
        
            <a id="insta" href="https://www.instagram.com/saltoinstalaciones/">
                <span>
                <svg className='header-social-icon' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" fill="none" strokeLinecap="round" 
                    strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 
                    0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" />
                </svg>
                </span>
            </a>
            <a id="face" href="https://www.facebook.com/salto.salto.9678?mibextid=ZbWKwL">
                <span>
                <svg className='header-social-icon' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                    stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                </span>
            </a>
            </div>
           
      </header>
        
        <nav >
       
       <ul id='sidenav' className={displayMenu}>
        
            <Link to='/'> 
            <li className="nav-link">
                <h2 className='h2-navigation' data-name="Inicio">Inicio</h2>
            </li>
            </Link>
           
            <Link to='/services'>
            <li className="nav-link">
                <h2 className='h2-navigation' data-name="Servicios">Servicios</h2>
            </li>
            </Link>
            <Link to='/contact'>
            <li className="nav-link">
                <h2 className='h2-navigation' data-name="Contacto">Contacto</h2>
            </li>
            </Link>
        </ul>
        
        </nav>
        </>
    )
}

export default Nav;