import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/view/dashboard";
import HeaderMenu from "./components/view/dashboard/HeaderMenu";
import CryptoPage from "./components/view/crypto";
import ForexPage from "./components/view/forex";
import StockPage from "./components/view/invest";

function App() {
  return (
    <Router>
      <HeaderMenu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/crypto" element={<CryptoPage />} />
        <Route path="/forex" element={<ForexPage />} />
        <Route path="/stock" element={<StockPage />} />
      </Routes>
    </Router>
  );
}

export default App;
