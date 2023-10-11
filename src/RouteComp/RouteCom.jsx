import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Registration from '../component/Registration';
import Logincom from '../component/Logincom';
import Home from '../component/Home';

const RouteCom = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Logincom />} />
      </Routes>
   
  );
};

export default RouteCom;
