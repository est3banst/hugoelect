import { useState } from "react"
import '../assets/Nav.css'

export default function Nav() {
    
    const [isOpen, setItOpen] = useState(false);
    const menuIco = isOpen ? 'open' : '';
    
    const displayMenu = isOpen ? 'header-ul-visible' : 'header-ul';
    const settingOpen = () => {
        setItOpen(!isOpen)
    }
    
    return (
        <>
         <header className='title-container'>
         <div className='header-container'>
         <span className='logo-container'>
        <img src='/imgs/saltologo.png' alt='brand logo' className='saltologo' />
      </span>
        <h1 className='heading-salto'>
          SALTO INSTALACIONES
          
        </h1>
        <small className='small-salto'>SERVICIO TÉCNICO ESPECIALIZADO</small>
     
      
       </div>
       
        <div className='header-icons'>
        <div id="nav-icon1" className={menuIco} onClick={settingOpen}>
            <span></span>
            <span></span>
            <span></span>
            </div>

            <span id="insta">
            <svg className='header-social-icon' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                 stroke="currentColor" fill="none" strokeLinecap="round" 
                 strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                 <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 
                 0 1 -4 -4z" />
                 <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" />
            </svg>
            </span>
            <span id="face">
            <svg className='header-social-icon' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
            </span>
            </div>
           
      </header>
        
        <nav >
       
       <ul id='sidenav' className={displayMenu}>
        
            <li className="nav-link">
                <h2 className='h2-navigation' data-name="Inicio">Inicio</h2>
            </li>
            <li className="nav-link">
                <h2 className='h2-navigation' data-name="Trabajos">Trabajos</h2>
            </li>
            <li className="nav-link">
                <h2 className='h2-navigation' data-name="Servicios">Servicios</h2>
            </li>
            <li className="nav-link">
                <h2 className='h2-navigation' data-name="Contacto">Contacto</h2>
            </li>
        </ul>
        
        </nav>
        </>
    )
}