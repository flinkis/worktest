import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import './styles/Site.css';

const ListView = lazy(() => import('./ListView'));
const DetailView = lazy(() => import('./DetailView'));

const Site = () => (
  <Router>
    <Header />
    <div className="main">
      <div className="container">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<ListView />} />
            <Route path="/:id" element={<DetailView />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  </Router>
);

export default Site;
