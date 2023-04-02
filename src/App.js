import Addcomponent from './components/Addcomponent';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Admin from './components/Admin';
import NotFoundPage from './components/NotFoundPage';
import Reset from './components/Reset';
import ModifyPage from './components/ModifyPage';

function App() {
   
  return (
    <div >
       <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/addcomponent' element={<Addcomponent/>}  />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/modify' element={<ModifyPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
