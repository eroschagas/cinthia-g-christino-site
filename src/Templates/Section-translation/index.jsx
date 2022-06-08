import { Convert } from "../../Components/svg/Convert";

export const Translation = () => {
  return (
    <section id="translation">
      <div className="general-spacing"></div>
      <h1 className="translation-title">Tradução</h1>
      <div className="translation-box">
        <div className="translation-img">
          <Convert />
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="translation-img-bg"
          ></div>
        </div>
        <div className="translation-text">
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
      </div>
    </section>
  );
};
