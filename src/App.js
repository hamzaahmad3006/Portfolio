import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';



import Cursor from './components/Cursor';

function App() {
  return (
   <>
   <Cursor />
   <Navbar/>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='portfolio' element={<Portfolio/>}/>
    <Route path='contact' element={<Contact/>}/>
   </Routes>
  
   </>
  );
}

export default App;
