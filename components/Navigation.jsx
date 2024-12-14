"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { TbArrowUpRight } from "react-icons/tb";

const nav = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT US" },
];

export default function Navigation({ isTransparentHeader }) {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {!isTransparentHeader && (
        <React.Fragment key={`${isOpen}`}>
          <div className=" flex justify-end">
          <button
            className="block lg:hidden  "
            onClick={() => setOpen(!isOpen)}
          >
            <svg
              className={`fill-current h-5 w-5 animate-in fade-in zoom-in ${
                isOpen ? "hidden" : "block"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-5 w-5 animate-in fade-in  zoom-in ${
                isOpen ? "block" : "hidden"
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button></div>
        </React.Fragment>
      )}
      <nav
        className={`hidden lg:flex gap-x-6 transition text-sm ease-in justify-center items-center duration-300 ${
          isTransparentHeader ? "opacity-0" : ""
        }`}
      >
        {nav.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={
              (pathname === href ? "font-bold underline-offset-4" : "") +
              " text-grey-900 text-md"
            }
          >
            {label}
          </Link>
        ))}
      </nav>
      <div
        className={`${
          !isOpen && "absolute"
        } transition-all  duration-500 fixed ease-in-out inset-0 z-30 bg-black bg-opacity-50 w-screen opacity-0 ${
          isOpen ? "opacity-100" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`transition-all duration-500 fixed ease-in-out h-screen top-0 left-0 z-30 bg-white flex flex-col gap-4 p-6 ${
          isOpen ? "" : "translate-x-[-100vw]"
        } `}
        onClick={() => setOpen(false)}
      >
        {nav.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={
              (pathname === href ? "font-bold underline-offset-4 w-100" : "") +
              " text-grey-900 text-md"
            }
          >
            {label}
          </Link>
        ))}
      </div>
      {!isTransparentHeader && <div className="  hidden lg:flex justify-end">
        <Link href={"/contact/"} className=" w-fit">
          <Fade direction="right" delay={2000} triggerOnce>
            <div
              className={`hidden transition-all duration-500 lg:block border-2 ${
                isTransparentHeader ? "border-white" : "hidden"
              } p-0.5`}
            >
              <button
                className={`flex transition-all duration-500  m-1  ${
                  isTransparentHeader
                    ? "bg-white py-2 px-4"
                    : "hidden"
                } `}
              >
                Contact Us <TbArrowUpRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </Fade>
        </Link>
      </div>}
    </>
  );
}
