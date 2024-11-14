"use client";
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";

const Hat = dynamic(() => import("@/components/models/Hat"), { ssr: false });

export default function AboutPage() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold text-9xl text-accent">Author</h1>
          <p className="font-light text-foreground text-lg">lorem ipsum</p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
