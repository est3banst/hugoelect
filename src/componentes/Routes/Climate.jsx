import Nav from '../Nav'
import Footer from '../Footer/Footer'

import Whats from '../Contact/Whats'

import '../../assets/Services.css'

export default function Climate() {
    return (
        <>
        <Nav />
        <div className="container-services">
        <section className='section-routes'>
                
                <div className='container-sec'>
                <h3>
                Climatización de piscinas
                </h3>
                    <p>
                    Los modernos climatizadores para piscinas son eficientes,utilizando tecnologías 
                    como bombas de calor o intercambiadores de calor. Estos sistemas pueden extraer 
                    calor del aire ambiente o de fuentes naturales, como el sol, para calentar el agua de la piscina.
                    </p>
               <div className='grid-images'>
                    <img className='route-imgs' src="/imgs/work-galler/climatizacion/pool.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/climatizacion/pool1.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/climatizacion/pool2.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/climatizacion/pool3.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/climatizacion/pool4.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/climatizacion/poolone.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/climatizacion/pooltwo.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/climatizacion/poolthree.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/climatizacion/poolfour.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/climatizacion/poolfive.jpg" alt="" />
                    
                </div>
                </div>
        </section>
        </div>
        <Whats />
        <Footer />
        </>
    )
}