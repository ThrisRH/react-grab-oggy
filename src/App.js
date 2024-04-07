import './App.css';
import React from 'react';
import RestaurantsPage from './components/DanhSachQuanAn/RestaurantsPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='restaurants' element={<RestaurantsPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
