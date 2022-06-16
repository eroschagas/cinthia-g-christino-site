import { Call } from "../../Components/svg/Call";
import { useLanguageContext } from "../../Context/Language";

export const Class = () => {
  const [language] = useLanguageContext();

  return (
    <section id="class">
      <div className="general-spacing"></div>
      {language ? (
        <h1 className="section-title">Aulas de Inglês</h1>
      ) : (
        <h1 className="section-title">English Classes</h1>
      )}

      <div className="section-box">
        <div className="section-img">
          <Call />
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
                Mais de 50% de todo o conteúdo da internet
                está em inglês, mas apenas 5% da população
                mundial é falante nativo.{" "}
              </p>
              <p>
                É inegável que a língua inglesa se tornou
                essencial para a comunicação com o resto do
                mundo. Precisamos dela para trabalhar,
                estudar, assistir nossas séries favoritas
                sem legenda e rir de mais memes.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                <b>Meus serviços:</b> Aulas Online
                personalizadas de acordo com a necessidade
                do aluno: do mais básico ao avançado (com ou
                sem livro didático), ou então aulas com foco
                específico, como viagem, trabalho, e testes
                de proficiência.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                Entre em contato para tirar dúvidas e marcar
                uma aula experimental gratuita.
              </p>
            </div>
          </div>
        ) : (
          <div className="section-text">
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                More than 50% of all content on the internet
                is in English, but only 5% of the world
                population speaks English as first language.{" "}
              </p>
              <p>
                It is undeniable that the English language
                has become essential to communicate with the
                rest of the world. We need it to work,
                study, watch our favorite series without
                subtitles, and laugh at more memes.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                <b>My services:</b> Online classes
                customized to the student&apos;s needs: from
                the most basic to advanced levels (with or
                without textbooks), or classes for a
                specific purpose, such as travel, work, and
                proficiency tests.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                Contact me if you have any questions and
                would like to schedule a free trial class.
              </p>
            </div>
          </div>
        )}{" "}
      </div>
    </section>
  );
};
