import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import UserDetails from './UserDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes> 
          <Route  path="/" element={<App />}>
            <Route path="user" element={<User/>}>
            <Route path=":userId:name" element={<UserDetails/>}/>

          </Route>
          
          <Route path="*" element={<h1>not found</h1>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

