import './App.css';
import Contacto from './components/Contacto';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProximosEventos from './components/ProximosEventos';
import Youtube from './components/Youtube';
import Historia from './pages/Historia';

function App() {
  return (
    <div >
      <div className='fixed'>
        <Navbar/>
      </div>
        <Hero/>
      <div className='flex flex-col md:grid-cols-2 '>
        <div className='der w-[95%] flex flex-col justify-center mx-auto'>
          <Youtube/>
          <ProximosEventos/>
          <Historia/>
        </div>

        <div className='izq  w-[95%] flex flex-col justify-center mx-auto'>
          <Contacto/>
        </div>
      </div>



      
      

    </div>
  );
}

export default App;
