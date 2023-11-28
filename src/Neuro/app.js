
import {   Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Main } from '../mainfolder/main';



function App() {
  return (
    <div className='container-fluid'>

    
      <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route path='Main' element={<Main/>}/>
        
     </Routes>
   
    </div>
  );
}

export default App;