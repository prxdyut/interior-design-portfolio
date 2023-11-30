import Image from "next/image";

export default function CompanySection() {
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
  return (
    <div className="py-4 bg-zinc-100">
      <p className="py-4 text-lg font-medium text-center opacity-40">
        Trusted by the world’s best companies
      </p>
      <marquee  className="overflow-scroll">
      <div style={{position: 'relative', right: '97%'}} className="container flex gap-12 items-center justify-between">
        {logos.map((logo) => (
          <img
            key={logo}
            src={logo}
            alt=""
            className=" h-[128px] w-[128px] object-contain opacity-40 mix-blend-multiply grayscale"
          />
        ))}</div>
      </marquee>
    </div>
  );
}
