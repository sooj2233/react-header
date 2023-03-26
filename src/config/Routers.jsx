import { Route, Routes } from 'react-router-dom';
import Catego from '../pages/Catego';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

 const Routers = () => {
   return (
    <Routes>
    <Route index element={<Home />} />
    <Route path=":category" element={<Catego />} >
        <Route path=":id" element={<Detail/>}/>
        <Route path="search/:keyword" element={<Catego/>}/>
    </Route>
  </Routes>
   )
 }
 
 export default Routers