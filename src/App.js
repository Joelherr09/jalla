import './App.css';
import Contacto from './components/Contacto';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProximosEventos from './components/ProximosEventos';
import Youtube from './components/Youtube';
import Historia from './pages/Historia';
import Integrantes from './pages/Integrantes'

function App() {
  return (
    <div >
        <Navbar/>
        <Hero/>
      <div className='flex flex-col md:grid md:grid-cols-2 w-[80%] mx-auto bg-[#00030060]'>
        <div className='der w-[95%] flex flex-col justify-center mx-auto'>
          <Youtube/>
          <ProximosEventos/>
          <Historia/>
        </div>

        <div className='izq  w-[95%] flex flex-col mx-auto items-start justify-start'>
          <Integrantes/>
          <Contacto/>
        </div>
      </div>



      
      

    </div>
  );
}

export default App;
