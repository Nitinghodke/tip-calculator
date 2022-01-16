import { useState } from 'react'
import './App.css'
import Header from './componant/Header'
import Footer from './Footer'
import Input from './Input'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header />
     <Input />
     <Footer />
    </div>
  )
}

export default App
