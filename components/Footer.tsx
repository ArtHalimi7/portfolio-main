import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-[#9d4edd]">your</span> project to
          the next level?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get in contact with me today!
        </p>

        <ContactForm />

        <div className="flex gap-4 mt-8">
          <a href="/arthalimi.docx" download>
            <MagicButton
              title="Download My CV"
              position="right"
              icon={undefined}
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 - {""}
          <span className="text-[#9d4edd]">Art Halimi</span>
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-full border border-[#9d4edd] hover:bg-[#9d4edd] transition-all"
            >
              {profile.link ? (
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-full h-full"
                >
                  <img
                    src={profile.img}
                    alt={`profile-${profile.id}`}
                    width={20}
                    height={20}
                  />
                </a>
              ) : (
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={profile.img}
                    alt={`profile-${profile.id}`}
                    width={20}
                    height={20}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
