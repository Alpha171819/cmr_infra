import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from '../components/Carousel'
import ProfileCard from '../components/ProfileCard'

import Navbar from '../components/Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <MyCarousel />
        <ProfileCard />
        <Navbar />
    </div>
  )
}

export default App
