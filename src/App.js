import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Feature from './components/Feature'
import Offer from './components/Offer'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App