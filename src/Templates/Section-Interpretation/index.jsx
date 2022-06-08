import { Work } from "../../Components/svg/Work";

export const Interpretation = () => {
  return (
    <section id="interpretation">
      <div className="general-spacing"></div>
      <h1 className="interpretation-title">
        Interpretação
      </h1>
      <div className="interpretation-box">
        <div className="interpretation-img">
          <Work />
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="interpretation-img-bg"
          ></div>
        </div>
        <div className="interpretation-text">
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
