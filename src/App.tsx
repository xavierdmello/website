import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Square from "./components/Square"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl">nice</h1>
      <Square/>
    </>
  );
}

export default App
