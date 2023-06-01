import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contect from './Components/Contect';
import Help from './Components/Help';
import Error from './Components/Error';
function App() {
  return (
    <>
    <div className='main'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contect' element={<Contect/>} />
      <Route path='/Help' element={<Help/>} />
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
