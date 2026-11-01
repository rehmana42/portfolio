
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { assets } from "@/assets/assets";

const works = [
  {
    name: "Apna Xerox",
    number: "01",
    category: "WEB APPLICATION",
    year: "2025",
    image: assets.project1,
    link: "https://apna-xerox-96ro.vercel.app/",
    stack: ["REACT", "NODE", "MONGODB", "EXPRESS"],
    description:
      "A digital printing platform connecting customers with nearby Xerox and printing shops.",
    type: "FULL STACK DEVELOPMENT",
  },
  {
    name: "Blood Donation App",
    number: "02",
    category: "MOBILE APPLICATION",
    year: "2025",
    image: assets.project8,
    link: "https://github.com/rehmana42/raktConnect",
    stack: ["FLUTTER", "DART", "PROVIDER", "REST API"],
    description:
      "A mobile application connecting blood donors with people in need through donor discovery and donation requests.",
    type: "MOBILE DEVELOPMENT",
  },
  {
    name: "Invoice Management",
    number: "03",
    category: "SAAS / AUTOMATION",
    year: "2026",
    image: assets.project3,
    link: "https://invoice.prestigieux.in/",
    stack: ["REACT", "NODE", "MONGODB", "BAILEYS"],
    description:
      "A full-stack invoice system with PDF generation, customer management and automated WhatsApp payment reminders.",
    type: "FULL STACK DEVELOPMENT",
  },
  {
    name: "Wallpaper App",
    number: "04",
    category: "MOBILE APPLICATION",
    year: "2025",
    image: assets.project4,
    link: "https://github.com/rehmana42/raktConnect",
    stack: ["FLUTTER", "DART", "API"],
    description:
      "A mobile wallpaper application for discovering, previewing and downloading high-quality wallpapers.",
    type: "MOBILE DEVELOPMENT",
  },
];

function PaperPoster({ project, index }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setRotation({
      x: (0.5 - y) * 9,
      y: (x - 0.5) * 11,
    });
  };

  const reset = () => {
    setRotation({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={reset}
        className="relative mx-auto w-full max-w-[540px] cursor-pointer"
        style={{ perspective: "1400px" }}
      >
        {/* Paper stack */}
        <motion.div
          animate={{
            rotate: hovered ? -3 : -1.5,
            x: hovered ? -9 : -5,
            y: hovered ? 9 : 5,
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 border border-black/10 bg-[#E9E7DF] shadow-md"
        />

        <motion.div
          animate={{
            rotate: hovered ? 2.5 : 1,
            x: hovered ? 8 : 5,
            y: hovered ? 13 : 9,
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 border border-black/10 bg-[#F0EEE7] shadow-md"
        />

        {/* Main paper */}
        <motion.div
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
            y: hovered ? -10 : 0,
            scale: hovered ? 1.015 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 170,
            damping: 22,
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative overflow-hidden border border-black/10 bg-[#F8F7F1] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.13)] sm:p-7"
        >
          {/* Folded corner */}
          <div className="absolute right-0 top-0 z-20 h-12 w-12 overflow-hidden">
            <div className="absolute -right-6 -top-6 h-12 w-12 rotate-45 border-b border-black/20 bg-[#E6E3D9] shadow-sm" />
          </div>

          {/* Poster top */}
          <div className="flex items-center justify-between border-b border-black/20 pb-3">
            <span className="text-[9px] font-black tracking-[0.2em]">
              AR / CREATIVE DEVELOPMENT
            </span>
            <span className="text-[9px] tracking-widest text-black/45">
              SELECTED WORK — {project.year}
            </span>
          </div>

          {/* Poster title */}
          <div className="relative py-7 sm:py-9">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E3332B]" />
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#E3332B]">
                {project.category}
              </span>
            </div>

            <h3 className="max-w-full text-[clamp(2.8rem,6vw,5.3rem)] font-black uppercase leading-[0.82] tracking-[-0.085em]">
              {project.name}
              <span className="text-[#E3332B]">.</span>
            </h3>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[9px] font-bold tracking-[0.15em] text-black/50">
                PROJECT NO. {project.number}
              </span>
              <span className="text-[9px] font-bold tracking-[0.15em] text-black/50">
                {project.type}
              </span>
            </div>
          </div>

          {/* Project screenshot */}
          <div className="relative overflow-hidden border border-black/15 bg-[#E8E6DF] p-2">
            <motion.img
              src={project.image}
              alt={project.name}
              animate={{ scale: hovered ? 1.045 : 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-[16/10] w-full object-cover"
            />

            <div className="absolute bottom-4 right-4 rotate-[-8deg] border-2 border-[#E3332B] px-3 py-1 text-[9px] font-black tracking-widest text-[#E3332B]">
              FEATURED
            </div>
          </div>

          {/* Description */}
          <div className="grid grid-cols-[1fr_85px] gap-5 py-6">
            <div>
              <p className="mb-2 text-[9px] font-black tracking-[0.2em] text-black/40">
                ABOUT THE PROJECT
              </p>
              <p className="text-xs leading-6 text-black/70 sm:text-sm">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex h-[76px] w-[76px] rotate-[-10deg] flex-col items-center justify-center rounded-full border-2 border-[#E3332B] text-center text-[#E3332B]">
                <span className="text-[8px] font-bold tracking-widest">
                  PROJECT
                </span>
                <span className="text-2xl font-black">
                  {project.number}
                </span>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="border-t border-black/20 py-4">
            <p className="mb-3 text-[9px] font-black tracking-[0.2em] text-black/40">
              BUILT WITH
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-black/20 px-2.5 py-1.5 text-[8px] font-bold tracking-wider sm:text-[9px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Poster footer */}
          <div className="flex items-center justify-between border-t border-black bg-[#171717] px-4 py-4 text-[#F8F7F1]">
            <span className="text-[9px] font-bold tracking-[0.15em]">
              ABDUL REHMAN / PORTFOLIO
            </span>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-[10px] font-black tracking-widest transition-colors hover:text-[#E3332B]"
            >
              VIEW PROJECT <span className="text-base">↗</span>
            </a>
          </div>

          {/* Paper bottom texture line */}
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#E3332B]" />
        </motion.div>
      </div>

      <p className="mt-7 text-center text-[9px] font-bold tracking-[0.25em] text-black/35">
        FIG. 0{index + 1} — {project.name.toUpperCase()}
      </p>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="overflow-hidden bg-[#EAE9E3] px-5 py-24 text-[#171717] sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1450px]">

        {/* Section heading */}
        <div className="mb-20 flex flex-col justify-between gap-8 border-b border-black/20 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-[10px] font-black tracking-[0.3em] text-[#E3332B]">
              THE PROJECT ARCHIVE / 001 — 004
            </p>

            <h2 className="text-[clamp(4rem,12vw,10rem)] font-black leading-[0.75] tracking-[-0.09em]">
              THE
              <br />
              ARCHIVE<span className="text-[#E3332B]">.</span>
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-6 text-black/55 sm:text-sm">
            A collection of digital products, applications and systems.
            Each project is a new problem turned into a working experience.
          </p>
        </div>

        {/* Poster grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2 lg:gap-x-16 lg:gap-y-28">
          {works.map((project, index) => (
            <PaperPoster
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-28 flex flex-col justify-between gap-5 border-t border-black/20 pt-6 sm:flex-row sm:items-center">
          <span className="text-[10px] font-bold tracking-[0.2em] text-black/45">
            END OF ARCHIVE — MORE TO COME.
          </span>

          <a
            href="https://github.com/rehmana42"
            target="_blank"
            rel="noreferrer"
            className="w-fit border-b border-[#E3332B] pb-1 text-sm font-bold hover:text-[#E3332B]"
          >
            EXPLORE GITHUB ↗
          </a>
        </div>
      </div>
    </section>
  );
}
