import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi , my name is</p>
        <h1>Dicky Kurniawan</h1>
        <h2>I'm a Full Stack Developer.</h2>
        <p>
          I'm a full-stack developer specializing in building (and ossasionally
          designing) exceptional digital experiences. Currently , I'm focused on
          building responsive full-stack web appliactions
        </p>
        <div>
          <button>
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
