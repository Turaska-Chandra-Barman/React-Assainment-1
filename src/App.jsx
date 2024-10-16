import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/common/Header'
import Data from './lib/Json.js'

function App() {
  const [getData, setData] = useState(Data)
  const {navlist,cardlist,incidents,newIncidents} = getData[0]

  return (
    <>
      <Header navlist={navlist}/>
    </>
  )
}

export default App
