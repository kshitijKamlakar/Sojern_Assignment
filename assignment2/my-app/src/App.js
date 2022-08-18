import './App.css';
import FavoriteDog from './favoriteDog.js';
import Base from './base.js';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
     <header className="App-header">
     <a href='/'><b>Home</b></a> <br></br>
     <a href='/favorites'><b>New Favorite Dogs</b></a> <br></br>
     

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}> </Route>
        <Route path="favorites" element={<FavoriteDog />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </header>
      </div>
  );
}

export default App;
