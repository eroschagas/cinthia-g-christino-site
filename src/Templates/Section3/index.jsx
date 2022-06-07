import { Work } from "../../Components/svg/Work";

export const Section3 = () => {
  return (
    <section id="section3">
      <h1 className="section3-title">Interpretação</h1>
      <div className="section3-interpretation">
        <div className="section3-img">
          <Work />
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="section3-img-bg"
          ></div>
        </div>
        <div className="section3-text">
          <div data-aos="fade-up" data-aos-delay="500">
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
          <div data-aos="fade-up" data-aos-delay="800">
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
          <div data-aos="fade-up" data-aos-delay="1100">
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
