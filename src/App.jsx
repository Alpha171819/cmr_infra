import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from '../components/Carousel'
import ProfileCard from '../components/ProfileCard'
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Form />
        <MyCarousel />
        <ProfileCard />
        <Navbar />
    </div>
  )
}

export default App
