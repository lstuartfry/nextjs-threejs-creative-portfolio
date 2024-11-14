"use client";

import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveContainer from "../ResponsiveContainer";

const buttonList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/codebucks27",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/codebucks",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://www.x.com/code_bucks",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];

export default function Navigation() {
  const angleIncrement = 360 / buttonList.length;

  const size = useScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  console.log(size);

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveContainer>
        {(size) => {
          return size && size >= 480 ? (
            <div className="w-max flex items-center justify-center relative animate-spin-slow hover:pause group">
              {buttonList.map((button, index) => {
                const angleRadian = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius} * ${Math.cos(angleRadian)})`;
                const y = `calc(${radius} * ${Math.sin(angleRadian)})`;

                return <NavButton key={button.label} x={x} y={y} {...button} />;
              })}
            </div>
          ) : (
            <div>responsive navigation</div>
          );
        }}
      </ResponsiveContainer>
    </div>
  );
}
