"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const sections = [
  { id: "bienvenue", label: "Bienvenue" },
  { id: "culture", label: "Culture" },
  { id: "equipes", label: "Équipes" },
  { id: "rh", label: "RH" },
  { id: "outils", label: "IT" },
  { id: "bureaux", label: "Bureaux" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[900px] mx-auto bg-vc-blurple/95 backdrop-blur-sm">
        <div className="flex items-center gap-1 px-4 py-2 overflow-x-auto scrollbar-none">
          <a href="#" className="shrink-0 mr-3">
            <Image
              src="/logo-vocalcom.svg"
              alt="Vocalcom"
              width={120}
              height={28}
              className="h-6 w-auto"
            />
          </a>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                active === s.id
                  ? "bg-vc-blue text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
