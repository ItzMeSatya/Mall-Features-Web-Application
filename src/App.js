import './App.css';
import Navbar from './Components/Navbar';
import Mall from './Components/Mall/Mall';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Gsm from './Components/GSM/Gsm';
import Movies from './Components/Movies/Movies';
import Parking from './Components/Parking/Parking';
import Food from './Components/Food/Food';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gsm" element={<Gsm />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/parking" element={<Parking />} />
      <Route path="/food" element={<Food />} />
    </Routes>
  );
}

export default App;
