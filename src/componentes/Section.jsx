import '../assets/Section.css'
export default function Section () {
    return (
       <>
       <main className='main-hero-section'>
        <div className='container-section'>
            <img src="/imgs/hugohero.png" alt="" className='img-hero-section' />
            <span className="section-sliders">
            <svg  id="slide-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 6l-6 6l6 6" />
            </svg>
            <svg id="slide-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" />
                </svg>
            </span>
            
        <div className="hero-cta">
            <p>Más de 20 años brindando calidad y tranquilidad a nuestros clientes</p>
            
                
                    <a className='call-now-a' href="tel://+59898414718">
                        
                    <p>Contacte hoy<svg className='phone-now-icon' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                        stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 
                            -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            <path d="M15 9l5 -5" /><path d="M15 5l0 4l4 0" />
                            </svg></p>
                </a><p> a un profesional de confianza
                </p>
            
        </div>
            </div>
       </main>
       </> 
    )
}