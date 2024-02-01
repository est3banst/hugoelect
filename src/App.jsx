import { useState } from 'react'
import Nav from './componentes/Nav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='title-container'>
        <h1 className='heading-salto'>
          SALTO INSTALACIONES
        </h1>
        <small className='small-salto'>SERVICIO TÉCNICO ESPECIALIZADO</small>
     
      <span className='logo-container'>
        <img src='/imgs/saltologo.png' alt='brand logo' className='saltologo' />
      </span>
      </div>
      
     <Nav />
    </>
  )
}

export default App
