import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-compnent">
      <div className="nav--itens">
        <h2>master lern</h2>
        <div className="log--itens">
          <Link to="" className="link__to">entrar</Link>
          <Link to="" className="link__to">cadastrar</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
