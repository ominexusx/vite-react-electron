import { useState } from 'react'
import reactLogo from './assets/react.svg'
import electronLogo from './assets/electron.svg'
import viteLogo from '../public/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://electronjs.org" target="_blank">
          <img src={electronLogo} className="logo electron" alt="Electron logo" />
        </a>
      </div>
      <h1>Vite + React + Electron</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/ui/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Electron logos to learn more
      </p>
    </>
  )
}

export default App