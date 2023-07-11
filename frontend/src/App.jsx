import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav.Component";
import AllRoutes from "./routes/routes";


const App = () => {
  return (
    <div className="App">
      <Nav />
      <AllRoutes />
    </div>
  )
}

export default App;