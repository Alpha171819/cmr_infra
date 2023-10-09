import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from '../components/Carousel'
import ProfileCard from '../components/ProfileCard'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <MyCarousel />
        <ProfileCard />
    </div>
  )
}

export default App
