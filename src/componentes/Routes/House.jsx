import '../../assets/Services.css'

import Whats from '../Contact/Whats'
import Nav from  '../Nav'
import Footer from '../Footer/Footer'

export default function House() {
    return (
        <>
        <Nav />
        <div className="container-services">
            <section className='section-routes'>
                
                <div className='container-sec'>
                <h3>
                Instalaciones y asesoría en obras
                </h3>
                    <p>
                    Contratar a un buen electricista es crucial para garantizar el éxito y la seguridad
                     de una obra.
                    </p>
               <div className='grid-images'>
                    <img className='route-imgs' src="/imgs/work-galler/house/obraone.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/house/obratwo.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/house/obrathree.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/house/obrafour.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/house/obrafive.jpg" alt="" />
                    <img className='route-imgs' src="/imgs/work-galler/house/obrasix.jpg" alt="" />
                    
                </div>
                </div>
                      </section>
            <section className='section-routes'>
            <div className='container-sec'>
                <h3>
                Instalaciones domiciliarias y mantenimiento eléctrico
                </h3>
                <div className='grid-images'>
                <img className='route-imgs' src="/imgs/work-galler/house/houseone.jpg" alt="" />
                <img className='route-imgs' src="/imgs/work-galler/house/housetwo.jpg" alt="" />
                <img className='route-imgs' src="/imgs/work-galler/house/bath.jpg" alt="" />                
                <img className='route-imgs' src="/imgs/work-galler/house/bath2.jpg" alt="" />
                <img className='route-imgs' src="/imgs/work-galler/house/lights.jpg" alt="" />                
                 <img className='route-imgs' src="/imgs/work-galler/house/ligths2.jpg" alt="" />
                 </div>
                </div>
            </section>
        </div>
        <Whats />
        <Footer />
        </>
    )
}