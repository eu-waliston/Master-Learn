import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main--component">
      <section className="home--section" id="home">
        <div className="welcome--itens">
          <div>
            <img
              src="./images/Layer-1.png"
              alt="school logo"
              className="image--home"
            />
          </div>
          <div className="ML">
            <h1>Master Learn</h1>
            <h3>Escola de Programação</h3>
          </div>
        </div>

        <div className="content--section">
          <div className="styled--item">
            <h4>html</h4>
          </div>
          <div className="styled--item">
            <h4>css</h4>
          </div>
          <div className="styled--item">
            <h4>javascript</h4>
          </div>
          <div className="styled--item">
            <h4>mysql</h4>
          </div>
          <div className="styled--item">
            <h4>mongodb</h4>
          </div>
          <div className="styled--item">
            <h4>react</h4>
          </div>
        </div>
      </section>

      {/* #TODO About us section  */}
      <section className="about--section" id="about-us">
        
      </section>

      {/* #TODO About us section  */}
      <div className="preco--section" id="prices"></div>

      {/* #TODO Tutors section */}
      <div className="tutors--section" id="tutors"></div>

      {/* #TODO Depoiments section */}
      <div className="depoiments--section" id="depoiments"></div>

      {/* #TODO Contact us section */}
      <div className="contact--section" id="contact-us"></div>
    </div>
  );
};

export default Home;
