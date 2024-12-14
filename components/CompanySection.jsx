import Image from "next/image";
import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
  } from "@radix-ui/react-icons";

  const logos = [
    "/image/air-company-logo.png",
    "/image/nike.png",
    "/image/samsung.png",
    "/image/amazon-pay.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYQG4aiXgIZgGBuYSj1sN7jTPlugNO4wBTXu6NUMj8INhzMx00Uu-GVb2tpdqFsZeGOY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUOKpEfUUdyQFCHQFp8BJVhQA1M2pSBMyuQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVDH3OYFRFLUB_3lzICxEAZ4cF4ihUPYsrQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpH2yE5YIXTtnCmuO7grIzKwLensuAtrVnaw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkLD-ppZ6U2YEl9K82zJTJ7ph4EwYnQEZ8g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQTJe1pbSii0SUfe56ALilqgTnAzckKutcw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLy4cLEpGY9kFj4VEM-nQ_iLFuszt5lf7i4A&usqp=CAU",
  ];
  
  export const InfiniteSlider = () => {
    return (
      <div className="relative m-auto w-100 overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10*5)]">
          {[...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              className="slide flex items-center justify-center"
              key={index}
            >
            <img src={logo} className="h-[224px] px-8 w-[224px] object-contain mix-blend-multiply grayscale" />
          
            </div>
          ))}
        </div>
      </div>
    );
  };

export default function CompanySection() {

  return (
    <div className="py-4 bg-zinc-100">
      <p className="py-4 text-lg font-medium text-center opacity-80">
        Trusted by the world’s best companies
      </p>

      <InfiniteSlider/>
    </div>
  );
}
