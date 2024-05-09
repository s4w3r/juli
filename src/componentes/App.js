import React from 'react';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Maestro from './pages/maestro';
import Nofound from './pages/Nofound';
import piquitos from './pages/piquitos';



export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nofound/>}></Route>
        <Route path='/page/piqui' element={<piquitos/>}></Route>
        <Route path="/otro" element={<Maestro/>}></Route>  
      </Routes>
      
    </BrowserRouter>
  )


}