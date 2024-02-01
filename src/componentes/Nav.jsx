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
        <div id="nav-icon1" className={menuIco} onClick={settingOpen}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <header className={displayMenu}>
       
       <ul id="nav" >
            <li className="nav-link">
                <h2 data-name="Inicio">Inicio</h2>
            </li>
            <li className="nav-link">
                <h2 data-name="Trabajos">Trabajos</h2>
            </li>
            <li className="nav-link">
                <h2 data-name="Servicios">Servicios</h2>
            </li>
            <li className="nav-link">
                <h2 data-name="Contacto">Contacto</h2>
            </li>
        </ul>
        </header>
        </>
    )
}