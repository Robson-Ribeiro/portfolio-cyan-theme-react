import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />

      <Contact />
    </div>
  );
}

export default App;
