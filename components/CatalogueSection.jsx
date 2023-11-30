"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { TbArrowUpRight } from "react-icons/tb";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CatalogueSection() {
  const [hover, sethover] = useState(0);
  const [active, setActive] = useState(0);
  const items = [
    {
      id: 1,
      title: "Modular Furniture Factory",
      image:
        "https://images.pexels.com/photos/19165508/pexels-photo-19165508/free-photo-of-sun-shining-on-an-empty-desk-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=600", // replace with the actual image URL
      description:
        "Modular Furniture Factory specializes in designing and manufacturing customizable modular furniture for residential and commercial spaces.",
    },
    {
      id: 2,
      title: "Fabrication (MS & Aluminium)",
      image:
        "https://www.gloqr.com/gloqr/cdn/sme/elite-sheet-metal-works-pvt-ltd-JJAv8242/services/10582.jpeg", // replace with the actual image URL
      description:
        "Fabrication (MS & Aluminium) offers top-notch fabrication services for Mild Steel (MS) and Aluminium, ensuring precision and quality in every project.",
    },
    {
      id: 3,
      title: "Jeet Marble and Granite",
      image:
        "https://media.licdn.com/dms/image/C4D22AQEUn7Wb97neaw/feedshare-shrink_800/0/1593364728957?e=2147483647&v=beta&t=JUBXnbRwbxPk9cAbMmzKJH9cVD5R6mWvnRPLLAEnqaY", // replace with the actual image URL
      description:
        "Jeet Marble and Granite is a leading supplier of premium marble and granite, providing a wide range of high-quality stones for various applications.",
    },
    {
      id: 4,
      title: "Aura Lights & LED",
      image:
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/db23fd32acbda7579057200abc9ea793.jpg?imageView2/2/w/500/q/60/format/webp", // replace with the actual image URL
      description:
        "Aura Lights & LED specializes in innovative lighting solutions, offering a wide range of energy-efficient LED products for residential, commercial, and industrial use.",
    },
    {
      id: 5,
      title: "HVAC",
      image:
        "https://www.daikin.eu/en_US/about/case-studies/supplying-a-complete-hvac-system-for-an-office-building/_jcr_content/image169.coreimg.png/1682423658351/dji-0044-2048x1152.png", // replace with the actual image URL
      description:
        "HVAC (Heating, Ventilation, and Air Conditioning) provides comprehensive HVAC solutions, ensuring optimal comfort and air quality in residential and commercial spaces.",
    },
    {
      id: 6,
      title: "Sanitary Fittings",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_h1vSITsO0GG3FMsUZzUDRrb0VBez2TtYQ&usqp=CAU", // replace with the actual image URL
      description:
        "Sanitary Fittings offers a diverse range of high-quality plumbing and sanitary products, catering to the needs of modern bathrooms and kitchens.",
    },
    {
      id: 7,
      title: "Kohler",
      image: "https://slkohlercampaign.com/images/banner5.jpg", // replace with the actual image URL
      description:
        "Kohler is a renowned brand known for its premium bathroom and kitchen products, including faucets, sinks, showers, and more, combining innovation and style.",
    },
  ];

  return (
    <div className="container ">
      <div className="bg-gray-100 p-8 rounded-lg">
        <p className="text-classico mb-4 text-5xl font-bold">Our Expertise</p>
        <p className=" text-gray-500 mb-8 font-medium text-lg">
          Empowering innovation through cutting-edge expertise in delivering
          solutions that redefine excellence.
        </p>
        <div className="grid grid-cols-2">
          <div className="grid gap-8 lg:gap-0 divide-gray-300   md:grid-cols-2 mt-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden group"
                onMouseEnter={() => sethover(index)}
                onMouseLeave={() => sethover(active)}
                onClick={() => setActive(index)}
              >
                <div
                  className={`top-0 py-2 lg:my-2 cursor-pointer  ${
                    active == index
                      ? "text-black"
                      : hover == index
                      ? "text-gray-600"
                      : "text-gray-400"
                  }`}
                >
                  <p
                    className={` text-xl animated-underline  transition-all  ${
                      active == index
                        ? "font-bold"
                        : hover == index
                        ? "font-semibold"
                        : "font-medium"
                    }`}
                    href=""
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <React.Fragment key={`${hover}`}>
              <img
                src={items[hover].image}
                className="h-[50vh] rounded-lg animate-in fade-in zoom-in duration-500"
              />
            </React.Fragment>
          </div>
        </div>
      </div>
      <React.Fragment key={`${active}`}>
        <div className="py-8 my-8 mx-auto flex flex-col items-center animate-in fade-in duration-500">
          <p className=" mb-10 mt-8 text-center w-100 lg:w-2/3 text-3xl font-bold text-gray-900 flex justify-between">
          <FaArrowLeft onClick={() => setActive(active - 1 < 0 ? items.length -1 : active -1 )} /> {items[active].title}{" "} <FaArrowRight  onClick={() => setActive(active + 1 < items.length ? active + 1 : 0)}/>
          </p>
          <p className=" mb-8 text-center w-100 lg:w-2/3  text-gray-500">
            {items[active].description +
              ` In addition to our expertise in modular furniture and lighting, we excel in the realm of aesthetics with our collection of premium marbles and granites. These materials add a touch of sophistication to your interiors, creating spaces that are both timeless and stylish.`}
          </p>
          <div className="w-[-webkit-fill-available] ">
            <Swiper
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <Image
                  src="/image/swiper1.jpg"
                  alt="LOGO"
                  width={520}
                  height={220}
                  className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/image/swiper2.jpg"
                  alt="LOGO"
                  width={520}
                  height={220}
                  className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/image/swiper3.jpg"
                  alt="LOGO"
                  width={520}
                  height={220}
                  className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/image/swiper4.jpg"
                  alt="LOGO"
                  width={520}
                  height={220}
                  className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/image/swiper5.jpg"
                  alt="LOGO"
                  width={520}
                  height={220}
                  className="w-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
