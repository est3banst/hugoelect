import Nav from '../Nav'
import Footer from '../Footer/Footer'
import Whats from '../Contact/Whats'

import '../../assets/Services.css'

export default function Negocio() {
    return (
        <>
        <Nav />
        <div className="container-services">
        <section className='section-routes'>
                
                <div className='container-sec'>
                <h3>
                Mantenimiento Industrial
                </h3>
                    <p>
                    Realizar revisiones y mantenimiento asegura que la instalación 
                    cumpla con los estándares establecidos. Además, la fiabilidad continua de la
                    instalación es esencial para evitar 
                    interrupciones en la producción y garantizar la continuidad operativa.
                   </p>
               <div className='grid-images'>
                    <img className='route-imgs' src="/imgs/work-galler/negocios/industrial.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/negocios/industrial1.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/negocios/industrial2.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/negocios/industrial3.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/negocios/industrial4.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/negocios/industrial5.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/negocios/industrial6.jpg" alt="" />
                    
                </div>
                </div>
        </section>
        </div>
        <Whats />
        <Footer />
        </>
    )
}