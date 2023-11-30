import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Jawan from './components/Jawan'
import Tiger3 from  './components/Tiger3'
import Animal from './components/Animal'
import Pathaan from './components/Pathaan';
import Gadar2 from './components/Gadar2';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">     
        <Navbar/>
        <Routes>
            <Route path="/Jawan" element={<Jawan/>} />
            <Route path="/Tiger3" element={<Tiger3/>} />
            <Route path="/Animal" element={<Animal/>} />
            <Route path="/Pathaan" element={<Pathaan/>} />
            <Route path="/Gadar2" element={<Gadar2/>} />
        </Routes>   
    </div>
  );
}

export default App;
