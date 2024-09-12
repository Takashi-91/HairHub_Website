import { useState } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar'
import Home from'./pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<header>
<NavBar/>
</header>
<Home/>
<footer>
  <Footer/>
</footer>


    </>
  )
}

export default App
