import { useState } from 'react'
import './App.css'
import Header from './componant/Header'
import Input from './Input'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header />
     <Input />
     
    </div>
  )
}

export default App
