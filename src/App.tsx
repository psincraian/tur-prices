import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Data from './pages/Data';
import Api from './pages/Api';
import './i18n';

function App() {
  return (
    <BrowserRouter basename="/spanish-gas-prices">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="data" element={<Data />} />
          <Route path="api" element={<Api />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;