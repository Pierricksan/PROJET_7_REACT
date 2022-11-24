import "./App.css";
//PAGES IMPORT
import Home from "./Pages/Home/Home";
import FicheLogement from "./Pages/FicheLogement/FicheLogement";
import Propos from "./Pages/Propos/Propos";
import Page404 from "./Pages/Page404/Page404";

// LAYOUT IMPORT
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

// Composant import
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
