import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

export default function ContactSection() {
  return (
    <div className="bg-black h-[90vh] text-white bg-[url('https://www.homelane.com/blog/wp-content/uploads/2018/12/4-3-1.jpg')] bg-[length:90vh] bg-no-repeat bg-center flex items-center justify-center flex-col">
      <div className="pb-8 w-[75vw] tracking-wider text-classico text-6xl text-center">
        Stand in our space to truly understand your desires. Let us help
        visualize and create your perfect dream space.
      </div>
      <Link href={"/contact"}>
        <button className=" border-4 rounded-full text-xl py-2 px-4 font-semibold border-white">
          GET IN TOUCH
        </button>
      </Link>
    </div>
  );
}
