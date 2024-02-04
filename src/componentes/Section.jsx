import '../assets/Section.css'
export default function Section () {
    return (
       <>
       <main className='main-hero-section'>
        <div className='container-section'>
            <img src="/imgs/hugohero.png" alt="" className='img-hero-section' />
            <span className="section-sliders">
            <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 6l-6 6l6 6" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" />
                </svg>
            </span>
            
        <div className="hero-cta">
            <p>Más de 20 años brindando calidad y tranquilidad a nuestros clientes</p>
            <a href="">
                <p>Contacte hoy a un profesional de confianza</p>
            </a>
        </div>
            </div>
       </main>
       </> 
    )
}