import clsx from "clsx";
import Image from "next/image";

const ItemLayout = ({ children, className }) => (
  <div
    className={clsx(
      "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
      className
    )}
  >
    {children}
  </div>
);

export default function AboutDetails() {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className="col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-2xl text-left w-full capitalize">
            Architect of Enchancement
          </h2>
          <p className="font-light">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Donec phasellus
            vehicula risus platea maecenas et venenatis; imperdiet sed. Montes
            pharetra vel; ornare quisque vivamus leo maximus tristique fames.
            Enim morbi adipiscing ridiculus imperdiet euismod lobortis
            condimentum porttitor. Vestibulum volutpat augue pretium
            pellentesque nascetur eget quis. Ex curae eros tortor facilisis
            quisque potenti.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-4 text-accent">
          Lobortis justo tempus lectus curae venenatis. Accumsan etiam finibus
          feugiat vivamus efficitur quis rhoncus elit.
        </ItemLayout>
        <ItemLayout className="col-span-4 text-accent">
          Lobortis justo tempus lectus curae venenatis. Accumsan etiam finibus
          feugiat vivamus efficitur quis rhoncus elit.
        </ItemLayout>

        <ItemLayout className="col-span-12">
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,ts,html,css,wasm&theme=light"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-6">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=lstuartfry"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-6">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=lstuartfry&show_icons=true&theme=radical"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
}
