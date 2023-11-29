"use client";
import Image from "next/image";
import logo from "../public/logo-wide.svg";

import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const pathname = usePathname();

  const isTransparentHeader =
    viewportHeight == 0
      ? true
      : pathname == "/"
      ? (scrollPosition / viewportHeight) * 100 < 60
      : false;
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);
  console.log(isTransparentHeader);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        "fixed inset-x-0 top-0 z-10 transition duration-400 " +
        (isTransparentHeader ? "bg-transparent" : "bg-white")
      }
    >
      <div
        className={`container flex items-center justify-between ${
          isTransparentHeader ? "py-8" : "py-2"
        }`}
      >
        <Image
          src={logo}
          alt="logo"
          className={`transition-all ${
            isTransparentHeader ? "h-16 w-fit" : "h-10 w-fit"
          }`}
        />
        <Navigation isTransparentHeader={isTransparentHeader} />
      </div>
    </div>
  );
}
