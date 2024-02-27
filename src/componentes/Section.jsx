import { useState, useRef, useEffect } from 'react'
import '../assets/Section.css'
import { picsSection } from './data/picts'

export default function Section () {

    const [currentIdx, setCurrentIndex] = useState(0);
    const heroRef = useRef();

    useEffect(() => {
        const heroImgs = heroRef.current
       
        const imgWidth = heroImgs.clientWidth;
       
        const scrollPosition = currentIdx * imgWidth;
       
        heroImgs.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        })
      
    },[currentIdx])

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % picsSection.length);
        }, 2500);
    
        return () => clearInterval(intervalId);
      }, [currentIdx, picsSection.length]);
    

    const goToPicture = (indexPict) => {
        setCurrentIndex(indexPict)
    }
    return (
       <>
       <main className='main-hero-section'>
        <div className='container-section'>
           <ul ref={heroRef} 
           className='imgs-hero' >
            {picsSection.map((pict, index) => (
                <li className='container-imgs' key={index}>
                    <img 
                    className='img-hero'
                    src={pict.imgSrc} 
                    alt="" />
                </li>
            ))}
           </ul>
            </div>
            
        <div className="hero-cta">
            <p className='hero-cta-p'>Más de 20 años brindando calidad y tranquilidad a nuestros clientes</p>
            
                
                    <a className='call-now-a' href="tel://+59898414718">
                        
                    <p className='contact-now'>Contacte hoy</p>
                        <svg className='phone-now-icon' width="24" height="24" viewBox="0 0 24 24" 
                        strokeWidth="2" 
                        stroke="currentColor" 
                        fill="none" strokeLinecap="round" 
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 
                        -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <path d="M15 9l5 -5" /><path d="M15 5l0 4l4 0" />
                        </svg>
                        
                    </a><p>
                    a un profesional de confianza
                    </p>
            
        </div>
          
       <div className='dot-for-img'>
            {
                picsSection.map((_, ind) => (
                    <div 
                    className={`dots-img ${ind === currentIdx ? 'active' : ''}`}
                    onClick={() => goToPicture(ind)}
                    key={ind}>
                    &#9865;
                        </div>
                ))
            }
           </div>
            
       </main>
       </> 
    )
}