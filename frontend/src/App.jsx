import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav.Component";
import Rotas from "./routes/routes";


const App = () => {
  return (
    <div className="App">
      <Nav />
      <Rotas />
    </div>
  )
}

export default App;