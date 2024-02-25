import Nav from './componentes/Nav'
import Section from './componentes/Section'
import Works from './componentes/Works'
import Nosotros from './componentes/About'
import Contact from './componentes/Contact'
import Footer from './componentes/Footer'
import './App.css'

function App() {

  return (
    <>  
    <a href="https://wa.me/+59898414718?text=Hola,%20estoy%20interesado%20en%20un%20presupuesto%20para%20..">
    <div className='container-whatsapp'>
    <svg className='contact-whatsapp' width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5"
     stroke="currentColor" fill="none" strokeLinecap="round" 
     strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
     fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
     <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 
     5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
    </div>
    </a>
      <Nav></Nav>
      <Section></Section>
      <Works/>
      <Nosotros></Nosotros>
      <Contact></Contact>
      <Footer></Footer>
    
    </>
  )
}

export default App
