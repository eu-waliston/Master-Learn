import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-compnent">
      <div className="nav--itens">
        <div className="logo">
          <Link to={"/"} className="ss">
            <h2>m l</h2>
          </Link>
        </div>
        <div className="web__iconst">
          <a href="#inicio">inicio</a>
          <a href="#sobre-nos">sobre nós</a>
          <a href="#precos">preços</a>
          <a href="#professores">professores</a>
          <a href="#depoimentos">depoimentos</a>
          <a href="#contato">contato</a>
        </div>
        <div className="log--itens">
          <Link to="/login" className="link__to">
            sou aluno
          </Link>
          <Link to="/register" className="link__to">
            cadastrar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
