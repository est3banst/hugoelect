import { useState } from 'react'
import Nav from './componentes/Nav'
import './App.css'
import Section from './componentes/Section'
import Works from './componentes/Works'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Section></Section>
      <Works/>
    
    </>
  )
}

export default App
