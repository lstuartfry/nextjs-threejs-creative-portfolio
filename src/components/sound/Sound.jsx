"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) =>
  createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 pxx-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8">
        <p className="font-light">
          would you like to play the background music?
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
          >
            yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
          >
            no
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );

export default function Sound() {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    const shouldPlay = !isPlaying;
    setIsPlaying((s) => !s);
    shouldPlay ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("musicConsent", String(shouldPlay));
    localStorage.setItem("consentTime", new Date().toISOString());
    setShowModal(false);
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
    const consentTime = localStorage.getItem("consentTime");

    // if consent exists and is older than 3 days, add event listener for first user interaction
    if (
      musicConsent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
    ) {
      setIsPlaying(musicConsent === "true");

      ["click", "keydown", "touchstart"].forEach((e) => {
        document.addEventListener(e, handleFirstUserInteraction);
      });
    } else {
      setShowModal(true);
    }
  }, []);

  return (
    <div className="fixed top-4 right-4 lg:right-2.5 z-50 group">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )}
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
