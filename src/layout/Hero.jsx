import { useEffect } from "react";

// import { Carousel } from "react-responsive-carousel";
// import "react-respo nsive-carousel/lib/styles/carousel.min.css";

// import Aos from "aos";
// import "aos/dist/aos.css";

// import Woman from "../images/Woman.svg";
import Animate from "../assets/Hero-animate.svg";

const Hero = ({ onButtonClick }) => {
  // useEffect(() => {
  //   Aos.init();
  // }, []);
  return (
    <section className="w-full h-full bg-black  ">
      <div className="w-full h-full bg-black">
        {/* <Carousel> */}
        {/* <div>
            <img src={Woman} alt="Img" className="h-[70%] w-[70%]" />
          </div>
          <div>
            <img src={Woman} alt="Img" className="h-[70%] w-[70%]" />
          </div>
          <div>
            <img src={Woman} alt="Img" className="h-[70%] w-[70%]" />
          </div>
          <div>
            <img src={Woman} alt="Img" className="h-[70%] w-[70%]" />
          </div> */}
        {/* </Carousel> */}
      </div>
      <div className="mx">
        <button onClick={onButtonClick}>
          <img src={Animate} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
