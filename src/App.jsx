import React, { useState } from 'react';
import Home from './containers/Home';
import Navbar from './containers/navBar';
import Footer from './containers/Footer';
import About from './containers/About'; // Update the path to where your About component is located
import { HighlightProvider } from './containers/highlightContext';
import './App.css';
import './containers/Footer.css';
import Projects from './containers/projects'; 

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <body>
      <div>
        <Navbar onChangeView={setCurrentView} />
        <HighlightProvider>
          {currentView === 'home' && <Home />}
          {currentView === 'about' && <About />}
          {currentView === 'projects' && <Projects/>}
        </HighlightProvider>
        <Footer/>
      </div>
    </body>
  );
}

export default App;
