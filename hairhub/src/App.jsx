import { useState } from 'react';
import About from './pages/About';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <About />

  )
}

export default App
