import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './Neuro/app';
import { Home } from './Neuro/Home';
import { Login } from './Neuro/Login';























const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
      
      <BrowserRouter>
        
        <Home/>
      
        
       </BrowserRouter>
      
     </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
