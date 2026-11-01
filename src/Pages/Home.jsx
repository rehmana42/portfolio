
import React from "react";
import AcidSquares from "@/components/AcidSquares";
import CircularCarousel from "@/components/CircularCarousel";
import { assets } from "@/assets/assets";

const projects = [
  {
    src: assets.project1,
    alt: "ApnaXerox",
    title: "ApnaXerox",
    subtitle: "PRINTING PLATFORM",
  },
  {
    src: assets.project2,
    alt: "Invoizo",
    title: "Invoizo",
    subtitle: "INVOICE MANAGEMENT",
  },
  {
    src: assets.project3,
    alt: "ScrapMart",
    title: "ScrapMart",
    subtitle: "SCRAP MARKETPLACE",
  },
  {
    src:assets.project4,
    alt: "RaktConnect",
    title: "RaktConnect",
    subtitle: "MOBILE APPLICATION",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F7F4] text-[#171717]">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.13] grayscale">
        <AcidSquares
          color="#eeeeea"
          accentColor="#777777"
          secondaryColor="#aaaaaa"
          tileSize={1}
          gap={0.12}
          roundness={0.05}
          rotation={35}
          waves={1}
          pulse={1}
          lighting="split"
          tilt={0.7}
          grain={0.12}
          intro
          mouseInteraction
          softness={0.5}
          bulge={0.3}
          gloss={0.3}
          waveScale={1}
          speed={0.6}
          shape="square"
          pulseSpeed={0.45}
          pulseSpacing={1}
          pulseWidth={1}
          pulseOrigin="center"
          brightness={1}
          zoom={1}
          depth={10}
          fade={0}
          opacity={1}
          hoverEffect="press"
          mouseStrength={1}
          mouseRadius={0.35}
          pulseOnClick
          detail="medium"
          lightMode={false}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 md:px-12">

      

        {/* HERO */}
        <section
          id="home"
          className="grid flex-1 grid-cols-1 items-center gap-8 py-12 lg:grid-cols-12 lg:gap-3"
        >

          {/* INTRODUCTION */}
          <div className="relative z-10 lg:col-span-5">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#E3332B]" />
              <p className="text-[10px] font-bold tracking-[0.22em] text-black/50">
                FULL STACK DEVELOPER / INDIA
              </p>
            </div>

            <p className="mb-5 text-xs font-bold tracking-[0.2em] text-[#E3332B]">
              HELLO, I'M ABDUL REHMAN
            </p>

            <h1 className="text-[clamp(3.5rem,7.5vw,7.5rem)] font-black leading-[0.84] tracking-[-0.085em]">
              DIGITAL
              <br />
              SOLUTIONS
              <br />
              <span className="text-[#E3332B]">DEVELOPER.</span>
            </h1>

            <p className="mt-8 max-w-[440px] text-sm leading-7 text-black/60 md:text-base">
              I build modern web applications, scalable backend systems
              and meaningful digital products. I don't just build apps.
              I build systems that last.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="https://github.com/rehmana42"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 bg-black px-6 py-4 text-[10px] font-bold tracking-widest text-white transition-all hover:bg-[#E3332B]"
              >
                EXPLORE MY WORK
                <span className="text-lg transition-transform group-hover:translate-x-2">↗</span>
              </a>

              <a
                href="#contact"
                className="border-b border-black/40 pb-2 text-[10px] font-bold tracking-widest transition-colors hover:border-[#E3332B] hover:text-[#E3332B]"
              >
                CONTACT ME ↗
              </a>
            </div>

            {/* TECHNOLOGIES */}
            <div className="mt-12 border-t border-black/15 pt-5">
              <p className="mb-4 text-[9px] font-bold tracking-[0.2em] text-black/40">
                TECHNOLOGIES I WORK WITH
              </p>

              <div className="flex flex-wrap gap-2">
                {["REACT", "NODE.JS", "MONGODB", "EXPRESS", "FLUTTER", "TAILWIND"].map((skill) => (
                  <span
                    key={skill}
                    className="border border-black/20 px-3 py-2 text-[9px] font-bold tracking-wider transition-all hover:border-[#E3332B] hover:bg-[#E3332B] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* WIDE CIRCULAR CAROUSEL */}
          {/* WIDE CIRCULAR CAROUSEL */}
<div className="relative flex min-w-0 w-full items-center justify-center lg:col-span-7">

  <div className="absolute left-4 top-4 z-10 hidden lg:block">
    <p className="text-[10px] font-bold tracking-[0.2em] text-[#E3332B]">
      01 / SELECTED WORK
    </p>
  </div>

  {/* Carousel container */}
  <div className="relative flex h-[480px] w-full items-center justify-center sm:h-[580px] lg:h-[720px] xl:h-[800px]">

    <div className="h-full w-full">
      <CircularCarousel
        items={projects}
        preset="cylinder"
        intro="rise"
        cardWidth={300}
        aspectRatio={1}
        speed={14}
        captions={false}
        gap={30}
        tilt={-5}
        curve={1}
        perspective={3000}
        autoplay="drift"
        interval={3}
        direction="left"
        momentum={0.6}
        snap
        pauseOnHover
        focusOnClick
        draggable
        parallax={0.3}
        stretch={0.5}
        fadeColor="#F7F7F4"
        depthFade={0.4}
        innerShade={0.5}
        cornerRadius={12}
        className="h-full w-full"
      />
    </div>
  </div>

  <p className="absolute bottom-3 right-4 hidden text-[9px] font-bold tracking-[0.2em] text-black/40 md:block">
    DRAG / EXPLORE / DISCOVER
  </p>
</div>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-col justify-between gap-3 border-t border-black/10 py-5 text-[9px] font-bold tracking-[0.16em] text-black/45 sm:flex-row">
          <p>© 2026 ABDUL REHMAN</p>
          <p>DESIGN / DEVELOPMENT / INNOVATION</p>
          <a href="#home" className="hover:text-[#E3332B]">
            BACK TO TOP ↑
          </a>
        </footer>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .nav-link {
          position: relative;
          transition: color 250ms ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 0;
          height: 2px;
          background: #E3332B;
          transition: width 250ms ease;
        }

        .nav-link:hover {
          color: #E3332B;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        ::selection {
          background: #E3332B;
          color: white;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </main>
  );
}
