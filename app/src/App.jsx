import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

import Login from './pages/Login'




function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="App">
       {/* <Home /> */}
       <Login />
        
      </div>
  )
}

export default App
