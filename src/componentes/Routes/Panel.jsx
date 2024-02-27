import Nav from '../Nav'
import Footer from '../Footer/Footer'
import Whats from '../Contact/Whats'

import '../../assets/Services.css'

export default function Panel() {
    return (
        <>
        <Nav />
        <div className="container-services">
        <section className='section-routes'>
                
                <div className='container-sec'>
                <h3>
                Instalación de paneles solares
                </h3>
                    <p>
                    Por qué no aprovechar la energia del sol para reducir tus costos energeticos?
                        Hace la elección inteligente, elegi la energía solar!
                   </p>
               <div className='grid-images'>
                    <img className='route-imgs' src="/imgs/work-galler/paneles/panel.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/paneles/panelone.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/paneles/paneltwo.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/paneles/panelthree.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/paneles/panelfour.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/paneles/panelfive.jpg" alt="" />
                    
                </div>
                </div>
        </section>
        </div>
        <Whats />
        <Footer />
        </>
    )
}