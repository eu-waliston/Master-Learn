import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-compnent">
      <div className="nav--itens">
        <div className="logo">
            <h2>m l</h2>
        </div>
        <div className="web__iconst">
            <a href="#home">inicio</a>
            <a href="#about-us">sobre nós</a>
            <a href="#tutors">professores</a>
            <a href="#depoiments">depoimentos</a>
            <a href="#contact-us">contato</a>
        </div>
        <div className="log--itens">
          <Link to="" className="link__to">sou aluno</Link>
          <Link to="" className="link__to">cadastrar</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
