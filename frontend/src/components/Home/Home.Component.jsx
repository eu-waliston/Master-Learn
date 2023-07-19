import React from "react";
import "./Home.css";

import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

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

      <section className="about--section" id="sobre-nos">
        <div>
          <h1>sobre nós</h1>
          <h4>Bem-vindo(a) a Master Learn a escola programação online!</h4>
          <br />
          <h4>
            Nossa plataforma online proporciona uma experiência de aprendizado
            intuitiva, permitindo que você acesse nossos cursos de qualquer
            lugar, a qualquer momento. Você terá acesso a videoaulas
            envolventes, exercícios interativos de codificação e projetos
            práticos que simulam situações do mundo real. Nosso objetivo é não
            apenas ensinar as habilidades técnicas, mas também desenvolver sua
            capacidade de resolver problemas e pensamento crítico,
            características essenciais para um programador de sucesso.
          </h4>
          <br />
          <h4>
            Acreditamos que a aprendizagem deve ser um processo colaborativo e
            de apoio. Por meio de nossos fóruns e oportunidades de networking,
            você terá a chance de se conectar com outros alunos, compartilhar
            ideias e colaborar em projetos. Nossos instrutores e equipe de
            suporte estão sempre disponíveis para oferecer orientação e
            responder a quaisquer dúvidas que possam surgir durante sua jornada.
          </h4>
        </div>
        <div>
          <img src="./images/OBJECTS.png" alt="about" className="about-img" />
        </div>
      </section>

      <section className="price--section" id="precos">
        <div className="prices--infos">
          <h1>escolha seu plano</h1>
          <h4 className="prices-h4">
            e venha fazer parte da melhor escola de programação do brasil.
          </h4>
          <div className="prices">
            <div className="price">
              <i class="bi bi-diamond"></i>
              <h2>básico</h2>
              <h3>R$ 30/mês</h3>
              <h4 className="infos">
                este é nosso plano básico ele cobre 70% do contéudo da
                plataforma isso inclui:
              </h4>
              <br />
              <div className="offer-list">
                <h4>
                  <i class="bi bi-check-lg"></i> video aulas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> forum para duvidas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> suporte 12h
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> 3 video conferências ao mês
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> comunidade discord
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> professor particular*
                </h4>
              </div>
              <input type="button" value="Contratar" className="btn-primary" />
            </div>

            <div className="price foccus">
              <i class="bi bi-diamond-half"></i>
              <h2>Pro</h2>
              <h3>R$ 90/mês</h3>
              <h4 className="infos">
                este é nosso plano pro ele cobre 100% do contéudo da plataforma
                isso inclui:
              </h4>
              <br />
              <div className="offer-list">
                <h4>
                  <i class="bi bi-check-lg"></i> video aulas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> forum para duvidas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> suporte 24h
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> video conferências
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> comunidade vip
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> professor particular
                </h4>
              </div>
              <input type="button" value="Contratar" className="btn-primary" />
            </div>

            <div className="price">
              <i class="bi bi-diamond-fill"></i>
              <h2>Empresas</h2>
              <h3>R$ 190/mês</h3>
              <h4 className="infos">
                este é nosso plano empresarial ele cobre 100% do contéudo isso
                inclui:
              </h4>
              <br />
              <div className="offer-list">
                <h4>
                  <i class="bi bi-check-lg"></i> video aulas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> forum para duvidas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> suporte 24h
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> video conferências
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> comunidade premium
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> professor particular
                </h4>
              </div>
              <input type="button" value="Contratar" className="btn-primary" />
            </div>
          </div>
        </div>
      </section>

      <div className="tutors--section" id="professores">
        <h1 className="tutor-know-1">conheça o time</h1>
        <h5 className="tutor-know-2">
          A Master Learn conta com os melhores professores nas principais areas
          do desenvolvimento web
        </h5>

        <div className="tutors">
          <div className="tutor">
            <img
              src="./images/tutor-1.jpg"
              alt="tutor"
              className="tutor--img"
            />
            <h1>Fernando</h1>
            <h5>Back-end</h5>
          </div>

          <div className="tutor">
            <img
              src="./images/tutor-2.jpg"
              alt="tutor"
              className="tutor--img"
            />
            <h1>Clara</h1>
            <h5>Front-end</h5>
          </div>

          <div className="tutor">
            <img
              src="./images/tutor-3.jpg"
              alt="tutor"
              className="tutor--img"
            />
            <h1>Lucca</h1>
            <h5>UX/UI</h5>
          </div>
        </div>
      </div>

      <section className="depoiments--section" id="depoimentos">
        <div className="depoimentos">
          <h1>Depoimentos</h1>
          <h5>
            Veja o feedback dos nossos alunos, e venha para a master learn você
            também
          </h5>
        </div>

        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="swipper-style">
            <img
              src="./images/slide-1.jpg"
              alt="pessoa"
              className="swiper-img"
            />
            <h1>David</h1>
            <h5>
              <i class="bi bi-quote"></i> O curso que participei foi
              extremamente enriquecedor. Os professores demonstraram um profundo
              conhecimento na área e souberam transmitir o conteúdo de forma
              clara e envolvente. Além disso, as atividades práticas
              proporcionaram uma excelente oportunidade para aplicar os
              conceitos aprendidos. Recomendo esse curso a todos que desejam
              aprimorar seus conhecimentos e desenvolver novas habilidades.
            </h5>
          </SwiperSlide>
          <SwiperSlide className="swipper-style">
            <img
              src="./images/slide-2.jpg"
              alt="pessoa"
              className="swiper-img"
            />
            <h1>Fernanda</h1>
            <h5>
              <i class="bi bi-quote"></i>Eu gostaria de ajudar, mas preciso de
              mais informações sobre o curso específico ao qual você se refere.
              Por favor, forneça mais detalhes sobre o curso para que eu possa
              oferecer uma opinião mais precisa.
            </h5>
          </SwiperSlide>
          <SwiperSlide className="swipper-style">
            <img
              src="./images/slide-3.jpg"
              alt="pessoa"
              className="swiper-img"
            />
            <h1>Elly</h1>
            <h5>
              <i class="bi bi-quote"></i>O curso oferecido é extremamente
              abrangente, abordando de forma completa e detalhada os principais
              aspectos da área de estudo. Os professores são altamente
              qualificados e engajados, proporcionando um ambiente de
              aprendizado estimulante. Além disso, a estrutura do curso é bem
              organizada, com materiais atualizados e recursos práticos que
              favorecem o desenvolvimento dos alunos. No geral, é uma excelente
              opção para quem busca aprimorar seus conhecimentos e se destacar
              na área.
            </h5>
          </SwiperSlide>
          <SwiperSlide className="swipper-style">
            <img
              src="./images/slide-4.jpg"
              alt="pessoa"
              className="swiper-img"
            />
            <h1>David</h1>
            <h5>
              <i class="bi bi-quote"></i>O curso em questão foi uma experiência
              incrível, fornecendo conhecimentos valiosos e práticos. Os
              instrutores foram altamente capacitados, demonstrando um profundo
              domínio do assunto e uma abordagem envolvente. Além disso, a
              estrutura do curso permitiu uma progressão clara e uma interação
              significativa entre os participantes. Sem dúvida, recomendaria
              esse curso a qualquer pessoa interessada em aprimorar suas
              habilidades nessa área específica.
            </h5>
          </SwiperSlide>
          <SwiperSlide className="swipper-style">
            <img
              src="./images/slide-5.jpg"
              alt="pessoa"
              className="swiper-img"
            />
            <h1>Lua</h1>
            <h5>
              <i class="bi bi-quote"></i>O curso que estou fazendo atualmente
              tem sido uma experiência enriquecedora. Os conteúdos são
              abrangentes e bem estruturados, fornecendo uma base sólida de
              conhecimento na área. Além disso, os professores são altamente
              qualificados e demonstram um grande comprometimento com o
              aprendizado dos alunos. Estou realmente satisfeito com a qualidade
              do curso e acredito que está contribuindo significativamente para
              o meu desenvolvimento profissional.
            </h5>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* #TODO Contact us section */}
      <section className="contact--section" id="contato">
        <div className="base-1">
          <img
            src="./images/Illustration.png"
            alt="contact"
            className="icon-contact"
          />
        </div>
        <div>
          <div className="contact-us-ss">
            <h1>Entre em contato conosco</h1>
            <h5>
              Estamos ansiosos para ouvir de você! Se você tiver alguma dúvida,
              comentário ou sugestão, não hesite em entrar em contato conosco.
              Preencha o formulário abaixo ou utilize os detalhes de contato
              fornecidos e nossa equipe terá prazer em responder o mais rápido
              possível.
            </h5>
          </div>

          <input type="email" placeholder="email" />
          <textarea
            name=""
            id=""
            cols="45"
            rows="8"
            placeholder="mensagem"
          ></textarea>
          <button className="btn-primary">enviar</button>

          <h5 className="txt-2">
            Sua opinião é importante para nós e ajudará a melhorar nossos
            produtos/serviços. Aguardamos o seu contato!
          </h5>

          <div className="social-media-links">
            <h2>Nos siga em nossas redes sociais:</h2>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-github"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
