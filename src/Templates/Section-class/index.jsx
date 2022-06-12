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
              <h1>Title</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Totam excepturi maxime,
                quidem incidunt laborum officia deleniti
                molestias quos minus voluptate unde dolorum
                facere. Nam consequatur repellendus quasi
                sequi, distinctio incidunt?
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h1>Title</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Totam excepturi maxime,
                quidem incidunt laborum officia deleniti
                molestias quos minus voluptate unde dolorum
                facere. Nam consequatur repellendus quasi
                sequi, distinctio incidunt?
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h1>Title</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Totam excepturi maxime,
                quidem incidunt laborum officia deleniti
                molestias quos minus voluptate unde dolorum
                facere. Nam consequatur repellendus quasi
                sequi, distinctio incidunt?
              </p>
            </div>
          </div>
        ) : (
          <div className="section-text">
            <div data-aos="fade-up" data-aos-delay="400">
              <h1>Title</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Reiciendis a recusandae
                delectus? Accusamus voluptatibus, doloremque
                necessitatibus quaerat numquam aliquid est
                adipisci architecto, itaque explicabo
                aliquam distinctio maiores, cumque molestiae
                facilis!{" "}
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h1>Title</h1>
              <p>English </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <h1>Title</h1>
              <p>English </p>
            </div>
          </div>
        )}{" "}
      </div>
    </section>
  );
};
