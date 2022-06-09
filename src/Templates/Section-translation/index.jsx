import { Convert } from "../../Components/svg/Convert";

export const Translation = () => {
  return (
    <section id="translation">
      <div className="general-spacing"></div>
      <h1 className="section-title">Tradução Escrita</h1>
      <div className="section-box">
        <div className="section-img">
          <Convert />
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="section-img-bg"
          ></div>
        </div>
        <div className="section-text">
          <div data-aos="fade-up" data-aos-delay="400">
            <p>
              Seja um parágrafo, uma página, ou um
              calhamaço, faço traduções precisas e com
              linguagem natural em uma grande variedade de
              temas, seja para português ou para o inglês.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <p>
              <b>Meus serviços:</b> Tradução de textos
              literários e jornalísticos, localização de
              jogos, apps e sites, tradução precisa de
              documentos e textos técnico-científicos.
            </p>
            <p>
              <b>Línguas:</b> Inglês-Português;
              Português-Inglês.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <p>
              O tempo de entrega pode variar conforme o
              tamanho e a complexidade do texto. Entre em
              contato para tirar dúvidas e solicitar um
              orçamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
