import * as React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import CardList from "./pages/CardList";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<FirstPage/>} />
          <Route path="/calculateForm-page" element={<CardList/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
