import React, {createContext, useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing/Landing";
import { DateContext } from './DateContext';

function App() {
  const currentDate = new Date();

  return (
    <DateContext.Provider value={currentDate}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </DateContext.Provider>
  );
}

export default App;
