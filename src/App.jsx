//import { useState } from 'react'
import Home from './containers/Home'
import Sidebar from './containers/sideBar'
//import Navbar from './containers/navBar'
import { HighlightProvider } from './containers/highlightContext';
import Resume from "./containers/ResumeNew";

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <HighlightProvider>
        <Home />
      </HighlightProvider>
    </div>
  )
}

export default App
