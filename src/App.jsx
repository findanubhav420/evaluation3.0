import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import {
  ERROR_ROUTE, HOME_ROUTE, EVENT_ROUTE
} from './constants/routes';
import {
  ErrorPage, NotFoundPage, HomePage, SingleCardPage
} from './pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage/>} />
          <Route path={'/event/1'} element={<SingleCardPage id="1"/>} />
          <Route path={'/event/2'} element={<SingleCardPage id="2"/>} />
          <Route path={'/event/3'} element={<SingleCardPage id="3"/>} />
          <Route path={'/event/4'} element={<SingleCardPage id="4"/>} />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
