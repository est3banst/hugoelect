import Nav from '../Nav'
import Footer from '../Footer/Footer'
import Whats from '../Contact/Whats'

import '../../assets/Services.css'

export default function Camaras() {
    return (
        <>
        <Nav />
        <div className="container-services">
        <section className='section-routes'>
                
                <div className='container-sec'>
                <h3>
                Sistemas de Videovigilancia
                </h3>
                    <p>
                   Asegura tu vivienda o negocio con nuestras instalaciones de videovigilancia en el día.</p>
               <div className='grid-images'>
                    <img className='route-imgs' src="/imgs/work-galler/cctv/cctv.jpeg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/cctv/cctv1.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/cctv/cctv2.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/cctv/cctv3.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/cctv/cctv4.jpg" alt="" />
                    
                </div>
                </div>
        </section>
        </div>
        <Whats />
        <Footer />
        </>
    )
}