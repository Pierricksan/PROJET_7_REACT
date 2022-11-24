import './App.css';
import Home from './Home/Home'
import FicheLogement from './FicheLogement/FicheLogement'
import Page404 from './Page404/Page404'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/logement" element={<FicheLogement/>} />
      <Route path="*" element={<Page404/>} />
     </Routes>
    </div>
  );
}

export default App;
