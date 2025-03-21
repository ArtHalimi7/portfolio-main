import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaShare } from "react-icons/fa6";
import Aurora from "./ui/Aurora";

const Hero = () => {
  return (
    <div className="min-h-screen relative">
      <Aurora
        colorStops={["#fff", "#813fbe", "#662f98"]}
        blend={0.7}
        amplitude={2.0}
        speed={0.5}
      />

      {/* Content */}
      <div className="relative z-10 pt-36 pb-20">
        <div className="flex justify-center my-20">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Build your next project with me"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m Art - an innovative web developer dedicated to
              crafting elegant and high-performing websites.
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
    </div>
  );
};

export default Hero;
