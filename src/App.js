import Addcomponent from './components/Addcomponent';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Admin from './components/Admin';


function App() {
   


  return (
    <div >
       <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/addcomponent' element={<Addcomponent/>}  />
        <Route path='/admin' element={<Admin/>}/>
       </Routes>
    </div>
  );
}

export default App;
