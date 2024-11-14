"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Sound() {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    const shouldPlay = !isPlaying;
    setIsPlaying((s) => !s);
    shouldPlay ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("musicConsent", String(shouldPlay));
  };

  const handleFirstUserInteraction = () => {
    const musicConsent = localStorage.getItem("musicConsent");
    if (musicConsent === "true" && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    // remove event listeners after first user interaction
    ["click", "keydown", "touchstart"].forEach((e) => {
      document.removeEventListener(e, handleFirstUserInteraction);
    });
  };

  // create event handlers associated with music consent in local storage
  useEffect(() => {
    const musicConsent = localStorage.getItem("musicConsent");

    if (musicConsent) {
      setIsPlaying(musicConsent === "true");

      ["click", "keydown", "touchstart"].forEach((e) => {
        document.addEventListener(e, handleFirstUserInteraction);
      });
    }
  }, []);

  return (
    <div className="fixed top-4 right-4 lg:right-2.5 z-50 group">
      <audio ref={audioRef} loop>
        <source src="/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
        your browser does not support the
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label={"Sound control button"}
        name={"Sound control button"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
}
