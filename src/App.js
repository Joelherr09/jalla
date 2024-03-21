import './App.css';
import Contacto from './components/Contacto';
import Hero from './components/Hero';
import Instagram from './components/Instagram';
import Navbar from './components/Navbar';
import ProximosEventos from './components/ProximosEventos';
import Youtube from './components/Youtube';
import Historia from './pages/Historia';

function App() {
  return (
    <div >
        <Navbar/>
        <Hero/>
      <div className='flex flex-col pt-8 px-8 md:grid md:grid-cols-2 w-[90%] mx-auto gap-8 items-start justify-start bg-[#00030060]'>
        <div className='der w-full flex flex-col justify-center mx-auto'>
          <Youtube/>
          <ProximosEventos/>
        </div>

        <div className='izq  w-full flex flex-col mx-auto items-start justify-start'>
          <Instagram/>
          <Historia/>
          <Contacto/>
        </div>
      </div>



      
      

    </div>
  );
}

export default App;
