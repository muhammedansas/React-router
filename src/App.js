import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Components/Home"
import NotFound from './Components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <button><Link to="/sample">Sample</Link></button> */}
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<Home />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
