import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";

// Lazy load components
const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const AppRoutes = () => (
  <Suspense fallback={<Loading message="Loading page..." />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
