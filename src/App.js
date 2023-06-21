import * as React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import CalculateForm from "./pages/CalculateForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<FirstPage/>} />
          <Route path="/calculateForm-page" component={CalculateForm} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
