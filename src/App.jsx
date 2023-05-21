import './App.css'
import FirstPage from "./firstPage/FirstPage";
import Navbar from './firstPage/navigation/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './firstPage/Footer';

function App() {
  return(<>
    <Navbar/>
    <Routes>
      <Route path='/MetaBnB' element={<FirstPage />}/>
    </Routes>
    <Footer/>
</>)
  }

export default App
