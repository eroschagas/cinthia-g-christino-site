import { useEffect } from "react";
import { Live } from "../../Components/svg/Live";
import Earth from "../../img/Earth.jpg";
import AOS from "aos";
import { useLanguageContext } from "../../Context/Language";

export const Home = () => {
  const [language] = useLanguageContext();

  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section id="home">
      <div className="general-spacing"></div>
      <div className="home-banner">
        <div
          className="home-background"
          style={{ backgroundImage: `url(${Earth})` }}
        ></div>
        <div className="home-banner-box">
          <h1 className="home-banner-text">
            Cinthia G. Christino
          </h1>
        </div>
      </div>
      <div className="home-presentation">
        <div className="home-img">
          <Live />
          <div className="home-img-bg"></div>
        </div>
        {language ? (
          <div className="home-text">
            <h1>Quem Sou Eu</h1>
            <div>
              <p>
                Dou aulas de inglês e trabalho com tradução
                desde 2013. Expandi meus horizontes para a
                interpretação em 2016.
              </p>
              <p>
                Estudei arquitetura na UFPR por alguns anos
                antes de ingressar na área de idiomas.
              </p>
              <p>
                Também leio e escrevo muito nas minhas horas
                vagas, além de cuidar dos gatos da rua (para
                o terror dos vizinhos) e disputar o último
                lugar em jogos de tabuleiro com os amigos.
              </p>
            </div>
          </div>
        ) : (
          <div className="home-text">
            <h1>Who Am I</h1>
            <div>
              <p>
                I&apos;m an English teacher and translator
                since 2013. I broadened my horizons toward
                interpreting in 2016.
              </p>
              <p>
                I studied architecture at UFPR for a few
                years before taking an interest in
                languages.
              </p>
              <p>
                I enjoy reading and writing in my free time,
                as well as taking care of street cats (much
                to the horror of my neighbors) and competing
                for last place in board games with friends.
              </p>
            </div>
          </div>
        )}{" "}
      </div>
    </section>
  );
};
