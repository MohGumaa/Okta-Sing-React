import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/staff" component={Staff} />
        </div>
      </div>
    </Router>
  );
}

export default App;
