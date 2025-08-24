// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PhotoCarousel from './components/PhotoCarousel'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <main className="main-content"> */}
        <PhotoCarousel />
      {/* </main> */}
    </div>
  )
}

export default App
