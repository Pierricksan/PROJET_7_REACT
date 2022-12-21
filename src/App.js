// Import modules
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
//CSS import 
import "./App.css";
//PAGES IMPORT
import Home from "./Pages/Home/Home";
import FicheLogement from "./Pages/FicheLogement/FicheLogement";
import Propos from "./Pages/Propos/Propos";
import PageErreur404 from "./Pages/PageErreur404/PageErreur404";
// LAYOUT IMPORT
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
// ASSET IMPORT
import LOGO from "./images/ImagesLayout/LOGO.svg";


function App() {

// route react pour les différentes pages de l'application web
// constitué en plus d'un menu et d'un footer affiché sur toutes les pages  
  return (
    <Fragment>
      <div className="pageContainer">
        <div className="App">
          <Header
            imageHeader={LOGO}
            menu={[
              { onglet: "Accueil", chemin: "/" },
              { onglet: "A propos", chemin: "/propos" },
            ]}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
            <Route path="/propos" element={<Propos />} />
            <Route path="*" element={<PageErreur404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
