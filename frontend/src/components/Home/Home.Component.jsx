import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main--component">
      <section className="home--section" id="inicio">
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
      <section className="about--section" id="sobre-nos">
        <div>
          <h1>sobre nós</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum porro
            perspiciatis aperiam. Iste dicta, vero maxime doloribus quaerat sint
            officia quisquam rem est eligendi! Doloremque eum impedit inventore
            dolore velit!
          </h4>
          <br />
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum porro
            perspiciatis aperiam. Iste dicta, vero maxime doloribus quaerat sint
            officia quisquam rem est eligendi! Doloremque eum impedit inventore
            dolore velit! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Earum porro perspiciatis aperiam. Iste dicta, vero maxime
            doloribus quaerat sint officia quisquam rem est eligendi! Doloremque
            eum impedit inventore dolore velit!
          </h4>
        </div>
        <div>
          <img src="./images/OBJECTS.png" alt="about" className="about-img"/>
        </div>
      </section>

      {/* #TODO About us section  */}
      <div className="preco--section" id="precos"></div>

      {/* #TODO Tutors section */}
      <div className="tutors--section" id="professores"></div>

      {/* #TODO Depoiments section */}
      <div className="depoiments--section" id="depoimentos"></div>

      {/* #TODO Contact us section */}
      <div className="contact--section" id="contato"></div>
    </div>
  );
};

export default Home;
