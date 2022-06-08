import { Call } from "../../Components/svg/Call";

export const Class = () => {
  return (
    <section id="class">
      <div className="general-spacing"></div>
      <h1 className="class-title">Aulas</h1>
      <div className="class-box">
        <div className="class-img">
          <Call />
          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="class-img-bg"
          ></div>
        </div>
        <div className="class-text">
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
