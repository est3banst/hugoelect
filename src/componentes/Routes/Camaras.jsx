import Nav from '../Nav'
import Footer from '../Footer/Footer'
import Whats from '../Contact/Whats'


import '../../assets/Carousel.css'

export default function Camaras() {
    return (
        <>
        <Nav />
        <section className='section-container'>
        <div className='container-carousel'>
        <div className='carousel'>
            <input type='radio' name='slides' defaultChecked id='slide-1' />
            <input type='radio' name='slides' id='slide-2' />
            <input type='radio' name='slides' id='slide-3' />
            <input type='radio' name='slides' id='slide-4' />
            <input type='radio' name='slides' id='slide-5' />
            <ul className='carousel__slides'>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/cctv/cctv.jpeg" alt="" />
                        </div>
                        <figcaption>
                        Sistemas de videovigilancia
                            <span className='job-info'>Asegura tu vivienda o negocio con nuestras
                             instalaciones de videovigilancia en el día.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/cctv/cctv1.jpg" alt="" />
                        </div>
                        <figcaption>
                        Sistemas de videovigilancia
                            <span className='job-info'>Asegura tu vivienda o negocio con nuestras
                             instalaciones de videovigilancia en el día.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/cctv/cctv2.jpg" alt="" />
                        </div>
                        <figcaption>
                        Sistemas de videovigilancia
                            <span className='job-info'>Asegura tu vivienda o negocio con nuestras
                             instalaciones de videovigilancia en el día.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/cctv/cctv3.jpg" alt="" />
                        </div>
                        <figcaption>
                        Sistemas de videovigilancia
                            <span className='job-info'>Asegura tu vivienda o negocio con nuestras
                             instalaciones de videovigilancia en el día.</span>
                        </figcaption>
                    </figure>
                </li>
                <li className='carousel__slide'>
                    <figure>
                        <div>
                        <img className='route-imgs' src="/imgs/work-galler/cctv/cctv4.jpg" alt="" />
                        </div>
                        <figcaption>
                        Sistemas de videovigilancia
                            <span className='job-info'>Asegura tu vivienda o negocio con nuestras
                             instalaciones de videovigilancia en el día.</span>
                        </figcaption>
                    </figure>
                </li>
                
                </ul>  
            <ul className='carousel__thumbnails'>
                <li>
                    <label htmlFor='slide-1'><img src='/imgs/work-galler/cctv/pool.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-2'><img src='/imgs/work-galler/cctv/pool1.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-3'><img src='/imgs/work-galler/cctv/pool2.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-4'><img src='/imgs/work-galler/cctv/poolone.jpg' alt="" /></label>
                </li>
                <li>
                    <label htmlFor='slide-5'><img src='/imgs/work-galler/cctv/pooltwo.jpg' alt="" /></label>
                </li>
                
            </ul>
        </div>
    </div>
</section>
        <Whats />
        <Footer />
        </>
    )
}