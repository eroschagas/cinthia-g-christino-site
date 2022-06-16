import { Work } from "../../Components/svg/Work";
import { useLanguageContext } from "../../Context/Language";

export const Interpretation = () => {
  const [language] = useLanguageContext();

  return (
    <section id="interpretation">
      <div className="general-spacing"></div>
      {language ? (
        <h1 className="section-title">Interpretação</h1>
      ) : (
        <h1 className="section-title">Interpreting</h1>
      )}
      <div className="section-box">
        <div className="section-img">
          <Work />
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
                A Interpretação permite que um orador seja
                entendido pela sua audiência mesmo que eles
                falem diferentes línguas. Existem duas
                modalidades:
              </p>
              <p>
                A <b>Interpretação Simultânea</b> ocorre
                durante o discurso do orador, sem
                interrupções, traduzindo a fala para a
                língua do ouvinte com apenas um pequeno
                atraso.
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
                ligações, etc.), Interpretação Presencial
                (eventos, palestras, reuniões, etc.),
                Acompanhamento Externo (em bancos,
                cartórios, consultas médicas, etc.).
              </p>
              <p>
                <b>Línguas:</b> Inglês para Português /
                Português para Inglês.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                Cada evento necessita de um preparo
                diferente.
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
                An Interpreter allows a speaker to be
                understood by his/her audience even if they
                speak different languages. There are two
                main modes:
              </p>
              <p>
                <b>Simultaneous Interpreting</b> is done
                during the speaker&apos;s speech, without
                interruption, translating the message into
                the listener&apos;s language with a small
                delay.
              </p>
              <p>
                <b>Consecutive Interpreting</b>, on the
                other hand, requires pauses for the
                interpreter to translate the speech,
                consuming more time than simultaneous
                interpreting.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                <b>My services:</b> Remote Interpreting
                (online meetings, virtual workshops, lives,
                calls, etc.), In-person Interpreting
                (events, conferences, meetings, etc.),
                Escort Interpreting (to banks, notaries,
                medical appointments, etc.).
              </p>
              <p>
                <b>Languages:</b> English to Portuguese /
                Portuguese to English.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p>
                Each situation requires individual
                solutions.
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
