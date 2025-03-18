"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        A small selection of{" "}
        <span className="text-[#9d4edd]">recent projects</span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[28rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 50,
            }}
          >
            <PinContainer
              title={item.title}
              href={
                item.link
                  ? item.link.startsWith("http")
                    ? item.link
                    : `https://${item.link}`
                  : "#"
              }
            >
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[17vh] lg:h-[29vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#62418b]">
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#e5c5ff",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`icon${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-[#9d4edd]">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#e5c5ff" />
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
