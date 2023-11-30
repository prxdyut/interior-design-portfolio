"use client";
import Image from "next/image";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

export default function Projects() {
  const [active, setActive] = React.useState(false);
  const projects = [
    {
      id: 1,
      name: "Drowing room for family time ",
      description:
        "Badroom with a clean and comfortable design for your family. charming whit a modern design. ",
      image: "/image/project3.jpg",
      images: [
        "/image/badroom.jpg",
        "/image/gallery2.jpg",
        "/image/gallery.jpg",
      ],
      link: "",
    },
    {
      id: 2,
      name: "Kitchen look modern and clean",
      description:
        "kitchen look modern and clean. charming whit a modern design. ",
      image: "/image/project2.jpg",
      images: [
        "/image/swiper1.jpg",
        "/image/gallery11.jpg",
        "/image/living.jpg",
      ],
      link: "",
    },
    {
      id: 3,
      name: "Perfect living room for family time",
      description:
        "Drowing room with a clean and comfortable design for your family. charming whit a modern design. ",
      image: "/image/project4.png",
      images: [
        "/image/gallery14.jpg",
        "/image/gallery15.jpg",
        "/image/gallery12.jpg",
      ],
    },
  ];
  return (
    <div className="">
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover ">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white text-classico ">
          OUR PROJECTS
        </h1>
      </div>
      <div className="container grid grid-cols-2 gap-8 py-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
            onClick={() => setActive(index + 1)}
          >
            <div>
              <Image
                src={project.image}
                width={480}
                height={380}
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4 ">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Lightbox
    plugins={[Thumbnails]}
        open={Boolean(active)}
        close={() => setActive(false)}
        slides={projects[active - 1]?.images.map((url) => ({ src: url }))}
      />
    </div>
  );
}
