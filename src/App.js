import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';

import Cursor from './components/Cursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
   <>
   <ScrollToTop />
   <Cursor />
   <Navbar/>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='portfolio' element={<Portfolio/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='*' element={<Navigate to='/' replace />}/>
   </Routes>

   </>
  );
}

export default App;
