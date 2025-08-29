import CatalogPage from "../pages/CatalogPage/CatalogPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import TrackPage from "../pages/TrackPage/TrackPage.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<TrackPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
