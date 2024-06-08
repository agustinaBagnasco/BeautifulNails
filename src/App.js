import './App.css';
import Navbar from './Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Disenios from './pages/Disenios';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Disenios' element={<Disenios />} />
        <Route path='Servicios' element={<Servicios />} />
        <Route path='Contacto' element={<Contacto />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
