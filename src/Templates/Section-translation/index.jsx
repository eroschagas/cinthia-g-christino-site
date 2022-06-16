import { Convert } from "../../Components/svg/Convert";
import { useLanguageContext } from "../../Context/Language";

export const Translation = () => {
  const [language] = useLanguageContext();

  return (
    <section id="translation">
      <div className="general-spacing"></div>
      {language ? (
        <h1 className="section-title">Tradução Escrita</h1>
      ) : (
        <h1 className="section-title">
          Written Translation
        </h1>
      )}

      <div className="section-box">
        <div className="section-img">
          <Convert />
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="section-img-bg"
          ></div>
        </div>
        {language ? (
          <div className="section-text">
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                Seja um parágrafo, uma página, ou um
                calhamaço, faço traduções precisas e com
                linguagem natural em uma grande variedade de
                temas, tanto para o português quanto para o
                inglês.
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
                <b>Línguas:</b> Inglês para Português /
                Português para Inglês.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                O tempo de entrega pode variar conforme o
                tamanho e a complexidade do texto.
              </p>
              <p>
                Entre em contato para tirar dúvidas e
                solicitar um orçamento.
              </p>
            </div>
          </div>
        ) : (
          <div className="section-text">
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                Whether it&apos;s a paragraph, a page, or a
                tome, I can make accurate, fluent
                translations on a wide variety of topics, be
                it in Portuguese or English.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                <b>My services:</b> Translation of literary
                and journalistic texts, localization of
                games, apps and websites, accurate
                translation of documents and scientific
                texts.
              </p>
              <p>
                <b>Languages:</b> English to Portuguese /
                Portuguese to English.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                Deadlines may vary according to the size and
                complexity of the text.
              </p>
              <p>
                Contact me if you have any questions and
                would like to request my rates.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
