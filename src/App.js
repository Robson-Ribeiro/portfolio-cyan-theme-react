import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
