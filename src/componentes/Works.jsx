import '../assets/Works.css'

export default function Works () {
    return (
        <>
        <article className='article-container'>
            
            <section className='article-section'>
                <div>
                    <img src="/imgs/2.png" alt="" />
                    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                        stroke="currentColor" fill="none" strokeLinecap="round" 
                        strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
                        fill="none"/><path d="M4 20l16 0" /><path d="M12 14l0 -10" />
                        <path d="M12 14l4 -4" /><path d="M12 14l-4 -4" />
                    </svg>
                </div>
            </section>
            
             <section className='article-section'>
                <div>
                    <img src="/imgs/electricbusiness.png" alt="" />
                    <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                        stroke="currentColor" fill="none" strokeLinecap="round" 
                        strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
                        fill="none"/><path d="M4 20l16 0" /><path d="M12 14l0 -10" />
                        <path d="M12 14l4 -4" /><path d="M12 14l-4 -4" />
                    </svg>
                </div>
            </section>
            
            <section className='article-section'>
                <div>
                   <img src="/imgs/lightup.png" alt="" /> 
                   <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
                        stroke="currentColor" fill="none" strokeLinecap="round" 
                        strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
                        fill="none"/><path d="M4 20l16 0" /><path d="M12 14l0 -10" />
                        <path d="M12 14l4 -4" /><path d="M12 14l-4 -4" />
                    </svg>
                </div>
            </section>

        </article>
        <div className="social-media-icons">
        <a className='social-email' href="mailto:estebeeen@outlook.com">
            <svg className='email-icon' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"
                    fill="none" /><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                <path d="M3 6l9 6l9 -6" /><path d="M15 18h6" /><path d="M18 15l3 3l-3 3" /></svg>
        </a>
        <h2 className='works-heading'>
            Email
        </h2>
        <p className='section-par'>Podes solicitar un presupuesto, o coordinar una visita</p>
        <p className='section-p'>Envianos un mail</p>

        <a className='socia-instagram' href="https://www.instagram.com/saltoinstalaciones/">
        <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1
             -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 
            0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>  </a>    
            <h2>Instagram</h2>
            <p className='section-par'>Tambien podés chequear nuestros trabajos acá</p>

        <a className='socia-instagram' href="https://www.facebook.com/salto.salto.9678?mibextid=ZbWKwL">
        <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
        stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
            </a>  
            <h2>Facebook</h2>
            <p className='section-par'>Podés encontrar más información acá</p>
                
        
        </div>
        </>
    )
}