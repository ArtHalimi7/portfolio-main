import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaShare } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 
        h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh] w-50" fill="#9d4edd" />
        <Spotlight className="top-28 left-80 h-[130vh] w-50" fill="#9d4edd" />
      </div>

      <div className="h-screen w-full dark:bg-black dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Build your next project with me"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Art - an innovative web developer dedicated to crafting
            elegant and high-performing websites.
          </p>
          <a href="#about">
            <MagicButton
              title="Explore my work"
              icon={<FaShare />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
