import { Work } from "../../Components/svg/Work";

export const Interpretation = () => {
  return (
    <section id="interpretation">
      <div className="general-spacing"></div>
      <h1 className="section-title">Interpretação</h1>
      <div className="section-box">
        <div className="section-img">
          <Work />
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="section-img-bg"
          ></div>
        </div>
        <div className="section-text">
          <div data-aos="fade-up" data-aos-delay="400">
            <p>
              A Interpretação permite que um orador seja
              entendido pela sua audiência mesmo que eles
              falem diferentes línguas. Existem duas
              modalidades:
            </p>
            <p>
              A <b>Interpretação Simultânea</b> ocorre
              durante o discurso do orador, sem
              interrupções, traduzindo a fala para a língua
              do ouvinte com apenas um pequeno atraso.
            </p>
            <p>
              Já a <b>Interpretação Consecutiva</b>{" "}
              necessita de pausas para que o intérprete
              traduza a fala, consumindo mais tempo que a
              tradução simultânea.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <p>
              <b>Meus serviços:</b> Interpretação Remota
              (reuniões online, workshops virtuais, lives,
              etc.), Interpretação Presencial (eventos,
              palestras, reuniões, etc.), Acompanhamento (em
              bancos, cartórios, consultas médicas, etc.).{" "}
            </p>
            <p>
              <b>Línguas:</b> Inglês-Português;
              Português-Inglês.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <p>
              Cada evento necessita de um preparo diferente.
              <br />
              Entre em contato para tirar dúvidas e
              solicitar um orçamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
