import { Home } from "lucide-react";
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link
      href="/"
      aria-label="home"
      className="hover:shadow-glass-sm text-foreground rounded-full flex items-center justify-center custom-bg fixed top-4 left-4 w-fit"
      name="home"
    >
      <span className="hover:text-accent relative w-14 h-14 p-4 group-hover:pause">
        <Home className="w-full h-auto" strokeWidth={1.5} />
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
          home
        </span>
      </span>
    </Link>
  );
}
