import { Work } from "../../Components/svg/Work";

export const Section2 = () => {
  return (
    <section id="section2">
      <h1 className="section2-title">Interpretação</h1>
      <div className="section2-interpretation">
        <div className="section2-img">
          <Work />
        </div>
        <div className="section2-text">
          <h1>Title</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Totam excepturi maxime, quidem
            incidunt laborum officia deleniti molestias quos
            minus voluptate unde dolorum facere. Nam
            consequatur repellendus quasi sequi, distinctio
            incidunt?
          </p>
        </div>
      </div>
    </section>
  );
};
