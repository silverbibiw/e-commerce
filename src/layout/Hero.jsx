import { useEffect } from "react";

import Animate from "../assets/Hero-animate.svg";

const Hero = ({ onButtonClick }) => {
  useEffect(() => {
    // Add any side effects or cleanup code here
    return () => {
      // Cleanup code here
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <section className="w-full h-screen bg-pink-600 pt-4 pb-3">
      <div className="w-full h-full bg-pink-600"></div>
      <div className="mx-auto max-w-screen-md">
        <button onClick={onButtonClick}>
          <img src={Animate} alt="Animated SVG" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
