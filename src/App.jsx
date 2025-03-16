import { useState } from 'react'
import './App.css'
import RenderName from './Example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RenderName 
      name={1}
      />
    </>
  )
}

export default App
