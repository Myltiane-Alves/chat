import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

import Login from './pages/Login'
import MainRoutes from './routes'




function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="App">
        <MainRoutes />
        
      </div>
  )
}

export default App
