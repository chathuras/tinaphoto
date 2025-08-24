// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import PhotoCarousel from './components/PhotoCarousel'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <PhotoCarousel />
              <HomePage />
            </>
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
