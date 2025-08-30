import CatalogPage from "../pages/CatalogPage/CatalogPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import TrackPage from "../pages/TrackPage/TrackPage.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Features from "./Features/Features.jsx";
import Reviews from "./Reviews/Reviews.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<TrackPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
