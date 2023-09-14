import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Navbar></Navbar>
     {/* <Home></Home> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div>
      
    </>
  )
}

export default App
