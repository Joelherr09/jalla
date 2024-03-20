import './App.css';
import Contacto from './components/Contacto';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Historia from './pages/Historia';
import Integrantes from './pages/Integrantes';

function App() {
  return (
    <div >
      <div className='fixed'>
        <Navbar/>
      </div>
      
      <Hero/>
      <Integrantes/>
      <Historia/>
      <Contacto/>

    </div>
  );
}

export default App;
