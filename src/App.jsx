import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import {
  ERROR_ROUTE, HOME_ROUTE
} from './constants/routes';
import {
  ErrorPage, NotFoundPage, HomePage
} from './pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage/>} />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
