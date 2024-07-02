import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header";

const ListView = lazy(() => import("./components/ListView"));
const DetailView = lazy(() => import("./components/DetailView"));

const Site = () => (
  <Router>
    <Header />
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/:imdbId" element={<DetailView />} />
        </Routes>
      </Suspense>
    </main>
  </Router>
);

export default Site;
