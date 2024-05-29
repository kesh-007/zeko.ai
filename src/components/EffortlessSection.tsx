"use client";
import React, { useRef } from "react";
import EffortsCard from "./EffortsCard";

const EffortlessSection = () => {
  const data = {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    name: "Roshinee",
    role: "Senior Engineering Manager",
  };

  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    // @ts-ignore
    marqueeRef.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    // @ts-ignore
    marqueeRef.current.style.animationPlayState = "running";
  };

  return (
    <div className="relative flex justify-between max-md:flex-col container">
      <div className="flex flex-col justify-center items-center md:px-10 max-w-6xl">
        <div className="text-start mt-4">
          <h1 className="text-[#4F33CC] md:text-5xl text-3xl font-bold mb-2 ">
            Effortless Acquisition
          </h1>
          <div className="flex gap-3 my-5">
            <div className="p-2 shadow-md text-sm inline-block">
              <span className="text-[#4F33CC] text-xl">86%</span> FASTER
            </div>
            <div className="p-2 shadow-md text-sm inline-block">
              <span className="text-[#4F33CC] text-xl">40%</span> RESPONSE RATE
            </div>
            <div className="p-2 shadow-md text-sm inline-block">
              <span className="text-[#4F33CC] text-xl">100%</span> BETTER THAN HR
              INTERN
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 mt-20 max-md:px-0 max-md:mt-0 max-md:w-full">
        <div
          ref={marqueeRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="scrolling-container relative"
        >
          <div className="scrolling-content">
            <div className="flex gap-3 max-md:flex-col">
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <EffortsCard
                  name={data.name}
                  role={data.role}
                  content={data.content}
                  className=""
                  logo={"/testimonials1.webp"}
                />
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <EffortsCard
                  name={data.name}
                  role={data.role}
                  content={data.content}
                  className="mt-6"
                  logo={"/testimonials2.webp"}
                />
              </div>
            </div>
            <div className="flex gap-3 max-md:flex-col">
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <EffortsCard
                  name={data.name}
                  role={data.role}
                  content={data.content}
                  className="mt-2"
                  logo={"/testimonials2.webp"}
                />
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <EffortsCard
                  name={data.name}
                  role={data.role}
                  content={data.content}
                  className="mt-4"
                  logo={"/testimonials4.webp"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default EffortlessSection;
