import './styles/Site.css';

import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from '../components/Header';
import Loading from '../components/Loading';

const ListView = lazy(() => import('./ListView'));
const DetailView = lazy(() => import('./DetailView'));

const Site = () => (
  <Router>
    <Header />
    <div className="main">
      <div className="container">
        <Suspense fallback={<Loading />}>
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
