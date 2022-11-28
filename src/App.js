import "./App.css";
//PAGES IMPORT
import Home from "./Pages/Home/Home";
import FicheLogement from "./Pages/FicheLogement/FicheLogement";
import Propos from "./Pages/Propos/Propos";
import PageErreur404 from "./Pages/PageErreur404/PageErreur404";

// LAYOUT IMPORT
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

// Composant import
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react"



function App() {
  return (
    <Fragment>
    <div className="pageContainer">
        <div className="App">  
          <Header menu={[
          {onglet : "Accueil", chemin : "/"},
          {onglet : "A propos", chemin : "/propos"},
          // {onglet : "404 erreur test", chemin : "/404page"}
          ]}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
            <Route path="/propos" element={<Propos />} />
            <Route path="*" element={<PageErreur404 />} />
          </Routes>
        </div>
      <Footer/>
    </div>
    </Fragment>
  );
}

export default App;
