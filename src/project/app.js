
import {   Route, Routes } from 'react-router-dom';
import { UserLogin } from './userLogin';





function Naresh() {
  return (
    <div className='container-fluid'>

    
      <Routes>
      
        <Route path='/' element={<UserLogin/>} />
        
        
     </Routes>
   
    </div>
  );
}

export default Naresh;