import './App.css';
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

    </div>
  );
}

export default App;
