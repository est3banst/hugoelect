import '../../assets/Services.css'

import Nav from  '../Nav'
import Footer from '../Footer/Footer'

export default function House() {
    return (
        <>
        <Nav />
        <div className="container-services">
            <section>
                <h3>
                Instalaciones y asesoría en obras
                </h3>
                    <p>
                    Contratar a un buen electricista es crucial para garantizar el éxito y la seguridad
                     de una obra.
                    </p>
                <img src="/imgs/work-galler/house/obraone.jpg" alt="" />
                <img src="/imgs/work-galler/house/obratwo.jpg" alt="" />
                <img src="/imgs/work-galler/house/obrathree.jpg" alt="" />
                <img src="/imgs/work-galler/house/obrafour.jpg" alt="" />
            </section>
            <section>
                <h3>
                Instalaciones domiciliarias y mantenimiento eléctrico
                </h3>
               
                <img src="/imgs/work-galler/house/houseone.jpg" alt="" />
                <img src="/imgs/work-galler/house/housetwo.jpg" alt="" />
                <img src="/imgs/work-galler/house/housethree.jpg" alt="" />                
                <img src="/imgs/work-galler/house/housefour.jpg" alt="" />
                <img src="/imgs/work-galler/house/housefive.jpg" alt="" />                
                <img src="/imgs/work-galler/house/housesix.jpg" alt="" />
            </section>
            <p>
                El mantenimiento regular de las instalaciones eléctricas 
                es esencial para garantizar la seguridad, la eficiencia y 
                la confiabilidad a largo plazo del sistema eléctrico.
                 </p>
        </div>
        <Footer />
        </>
    )
}