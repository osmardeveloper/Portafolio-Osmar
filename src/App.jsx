import './App.css'
import Navbar from './components/Layout/Navbar';
import { Route, Routes } from 'react-router-dom';
import Contacto from './components/Contacto';
import NavbarR from './components/NavbarR';
import Acerca from './components/Acerca';
import Estudios from './components/Estudios';
import Habilidades from './components/Habilidades';
import Portafolio from './components/Portafolio';


function App() {


  return (
  <div className="App">
     <Navbar />
     <NavbarR />
     <Routes>
          <Route path='/' element={<Acerca />}/>
          <Route path='/habilidades' element={<Habilidades />}/>
          <Route path='/portafolio' element={<Portafolio />}/>
          <Route path='/estudios' element={<Estudios />}/>
          <Route path='/contacto' element={<Contacto />}/>
     </Routes>      
 </div>
  )
}
  

  

export default App
