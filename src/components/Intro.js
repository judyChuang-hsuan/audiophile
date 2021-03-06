import React, { useEffect } from "react";
import introImg from "../assets/shared/mobile/image-best-gear.jpg";
import introImgDesktop from "../assets/shared/desktop/image-best-gear.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="w-10/12 m-auto mt-14 min-h-screen text-center lg:flex lg:min-h-80 lg:items-center lg:justify-center lg:mt-10 lg:gap-40"
    >
      <div>
        <img
          className="rounded-lg lg:hidden"
          src={introImg}
          alt="A man with headphone"
        />

        <img
          className="rounded-lg hidden lg:block lg:w-50 "
          src={introImgDesktop}
          alt="A man with a headphone"
        />
      </div>
      <div className="mt-14 mb-14 lg:w-11/12 xl:w-10/12">
        <h1 className="text-4xl font-bold 2xl:text-6xl lg:text-3xl">
          BRINGING YOU THE <span className="text-light-beige">BEST</span> AUDIO
          GEAR
        </h1>

        <p className="mt-14 text-dark-grey md:text-xl lg:text-lg xl:text-2xl 2xl:text-xl">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones,speakers, and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy you the protable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default Intro;
