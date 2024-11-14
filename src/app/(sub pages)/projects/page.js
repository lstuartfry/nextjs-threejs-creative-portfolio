"use client";
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import Projects from "@/components/projects";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export default function ProjectsPage() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-25"
      />
      <Projects />
      <div className="flex items-center justify-center fixed top-20 -left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
