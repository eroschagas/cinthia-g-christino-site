import { useEffect } from "react";
import { Live } from "../../Components/svg/Live";
import Earth from "../../img/Earth.jpg";
import AOS from "aos";

export const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section id="home">
      <div className="general-spacing"></div>
      <div className="home-banner">
        <div
          className="home-background"
          style={{ backgroundImage: `url(${Earth})` }}
        ></div>
        <div className="home-banner-box">
          <h1 className="home-banner-text">
            Cinthia G. Christino
          </h1>
        </div>
      </div>
      <div className="home-presentation">
        <div className="home-img">
          <Live />
          <div className="home-img-bg"></div>
        </div>
        <div className="home-text">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime laudantium voluptatibus
            iure minima consequatur iste corporis. Ea,
            consequuntur eum ipsum voluptas numquam libero
            amet perspiciatis ab esse ad, veritatis
            voluptatem.
          </p>
        </div>
      </div>
    </section>
  );
};
