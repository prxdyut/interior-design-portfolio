"use client";
import Image from "next/image";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { TbArrowUpRight } from "react-icons/tb";

export default function HeroSection() {
  return (
    <div className="bg-zinc-50 flex items-end h-[100vh]">
      <div className="absolute container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between ">
        <div className=" xl:py-14 lg:py-8">
          <Fade delay={200} triggerOnce>
            <h1 className="text-classico font-serif pb-8 text-4xl font-thin text-white xl:text-7xl lg:text-5xl">
              An aesthetic room is given harmony
            </h1>
          </Fade>
          <div className="flex items-center " >
            <hr class=" w-24 mr-4 md:mr-8" />
            <Fade delay={1200} triggerOnce>
              <p className=" text-xs md:text-sm lg:text-lg font-medium text-white mr-2 md:mr-4">
                DISCOVER YOUR AESTHETICS
              </p>
            </Fade>
            <Zoom delay={1400} triggerOnce>
              <button className="inline-flex items-center px-2 py-2 text-white rounded-full shadow-lg bg-gray-800  ">
                <TbArrowUpRight className="w-5 h-5" />
              </button>
            </Zoom>
          </div>
        </div>
      </div>
      <div>
        <video
          id="homepageVideo"
          src="./homepage-video-2.mp4"
          autoplay="{true}"
          loop
          muted
          className="w-screen h-[100vh] object-cover"
        ></video>
      </div>
    </div>
  );
}
