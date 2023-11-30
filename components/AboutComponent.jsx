"use client";
import Image from "next/image";

export default function AboutComponent() {
  return (
    <div className="container py-4 lg:py-16">
      <div className="flex items-center justify-between pb-4">
        <a
          className="pt-4 lg:py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl text-classico "
          href=""
        >
          What we do?
        </a>
        <p className="tracking-wider text-gray-400 hidden lg:block lg:text-md">
          SCROLL DOWN
        </p>
      </div>
      <div className="grid lg:grid-cols-2 place-items-center ">
        <Image
          src="/image/aboutfront.png"
          width={900}
          height={500}
          alt=""
          className="pb-4 md:pb-0"
        />

        <div className="items-center">
          <p className="px-0 md:px-12 pb-4">
            {`Regal Enterprises takes pride in being your one-stop solution for complete interior needs. Whether you're looking for contemporary furniture, state-of-the-art lighting, premium materials, or comprehensive fabrication and contracting services, we are committed to turning your vision into reality. Elevate your spaces with Regal Enterprises – where quality meets innovation for a truly regal interior experience. As a full-service provider, we extend our offerings to include expert fabrication services in MS and aluminum, ensuring precision and durability in every project. Our proficiency extends further to HVAC and sanitary fittings, addressing the essential aspects of comfort and hygiene in your spaces. In addition to our expertise in modular furniture and lighting, we excel in the realm of aesthetics with our collection of premium marbles and granites. These materials add a touch of sophistication to your interiors, creating spaces that are both timeless and stylish.`}
          </p>
        </div>
      </div>
    </div>
  );
}
