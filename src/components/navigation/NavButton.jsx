import {
  Github,
  Home,
  Linkedin,
  Notebook,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const getIcon = (icon) => {
  const defaultProps = { className: "w-full h-auto", strokeWidth: 1.5 };
  switch (icon) {
    case "home":
      return <Home {...defaultProps} />;
    case "about":
      return <User {...defaultProps} />;
    case "projects":
      return <Palette {...defaultProps} />;
    case "contact":
      return <Phone {...defaultProps} />;
    case "github":
      return <Github {...defaultProps} />;
    case "linkedin":
      return <Linkedin {...defaultProps} />;
    case "twitter":
      return <Twitter {...defaultProps} />;
    case "resume":
      return <Notebook {...defaultProps} />;
  }
};

export default function NavButton({ x, y, label, link, icon, newTab }) {
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{
        transform: `translate(${x}, ${y})`,
      }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        aria-label={label}
        className="hover:shadow-glass-sm text-foreground rounded-full flex items-center justify-center custom-bg"
        name={label}
      >
        <span className="hover:text-accent animate-spin-slow-reverse relative w-14 h-14 p-4 group-hover:pause">
          {getIcon(icon)}
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            {label}
          </span>
        </span>
      </Link>
    </div>
  );
}
