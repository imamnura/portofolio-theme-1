import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'boxicons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <a href="" className="logo">Portofolio</a>

        <box-icon name='menu' color='white'></box-icon>
        <i class='bx bxs-like bx-flashing'></i>

        <navbar className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about" className="href">About</a>
          <a href="#service" className="href">Service</a>
          <a href="#portofolio" className="href">Portofolio</a>
          <a href="#contact" className="href">Contact</a>
        </navbar>

      </header>
    </div>
  )
}

export default App
