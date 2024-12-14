"use client";
import Image from "next/image";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";

export default function ProjectsContainer({ projects }) {
  const [active, setActive] = React.useState(false);
  console.log(projects);
  return (
    <div className="">
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover ">
        <h1 className="container py-20 lg:py-64 text-6xl font-semibold tracking-widest text-white text-classico ">
          OUR PROJECTS
        </h1>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group aspect-square lg:aspect-video"
            onClick={() => setActive(index + 1)}
          >
            <div>
              <Image
                src={project.images[0]?.asset?.url}
                width={480}
                height={380}
                alt=""
                className="w-full max-lg:brightness-50"
              />
            </div>
            <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-4 lg:p-12 text-xl text-white transition duration-300 ease-in-out lg:translate-y-full lg:bg-gradient-to-b lg:from-transparent group-hover:to-black lg:group-hover:translate-y-0">
              <h1 className=" lg:text-2xl font-semibold">{project?.title}</h1>
              <p className=" max-lg:text-sm py-4 ">{project?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Lightbox
        plugins={[Thumbnails, Captions]}
        open={Boolean(active)}
        close={() => setActive(false)}
        captions={{descriptionTextAlign: 'center'}}
        slides={projects[active - 1]?.images.map(({ asset }, i) => ({
          src: asset.url,
          title: projects[active - 1].title,
          description: projects[active - 1].description,
        }))}
      />
    </div>
  );
}
