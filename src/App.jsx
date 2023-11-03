import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../src/assets/styleSheet/index.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className="Apps">
      <p>Welcome to kolo bank</p>
      <h1>We are now live on netlify</h1>
    </div>
  )
}

export default App
