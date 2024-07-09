import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>States in react</h1>
      {/* <Counter/> */}

      <LikeButton/>
    </>
  )
}

export default App
