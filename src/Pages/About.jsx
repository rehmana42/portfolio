
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

import { assets } from "@/assets/assets";
import ElasticMesh from "@/components/ElasticMesh";

const technologies = [
  "REACT.JS",
  "NODE.JS",
  "EXPRESS.JS",
  "MONGODB",
  "FLUTTER",
  "JAVASCRIPT",
  "TAILWIND CSS",
  "GSAP",
  "REST APIS",
];

const Reveal = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* PROFILE IMAGE */
const ProfileImage = ({ imageY }) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 150,
    damping: 20,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set(((x - centerX) / centerX) * 7);
    rotateX.set(((centerY - y) / centerY) * 7);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      style={{
        y: imageY,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 1000,
      }}
      initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto aspect-[4/5] w-full max-w-[420px] cursor-pointer overflow-hidden border-[6px] border-black bg-[#D9D9D4] sm:border-[8px]"
    >
      <motion.img
        src={assets.profile}
        alt="Abdul Rehman"
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.7 }}
      />

      <div className="absolute left-4 top-4 bg-[#E3332B] px-4 py-2 text-[10px] font-black tracking-widest text-white sm:text-xs">
        PROFILE / 001
      </div>

      <div className="absolute bottom-0 w-full bg-black p-4 text-white sm:p-6">
        <p className="text-[10px] font-bold tracking-[0.3em] text-white/50">
          THE DEVELOPER
        </p>

        <h4 className="mt-1 text-2xl font-black uppercase sm:text-3xl">
          ABDUL REHMAN
        </h4>

        <p className="mt-1 text-[10px] tracking-wider text-white/60 sm:text-xs">
          MERN STACK / FLUTTER DEVELOPER
        </p>
      </div>
    </motion.div>
  );
};

export default function AboutNewspaper() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingX = useTransform(
    scrollYProgress,
    [0, 0.4],
    [-100, 0]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [80, -80]
  );

  const smoothImageY = useSpring(imageY, {
    stiffness: 80,
    damping: 22,
  });

  const lineScale = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    [0, 1]
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="overflow-hidden bg-[#F7F7F4] py-20 text-[#171717] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-10 lg:px-16">

        {/* ABOUT HEADING */}
        <div className="border-y-[3px] border-black py-5">

          <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold tracking-[0.2em] sm:text-xs">
            <span>GET TO KNOW ME</span>
            <span className="text-[#E3332B]">ABOUT / 001</span>
          </div>

          {/* ELASTIC MESH RESPONSIVE LAYOUT */}
          <div className="mt-5 grid min-w-0 grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">

            {/* ABOUT TEXT MESH */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="relative min-w-0 overflow-hidden lg:col-span-7"
            >
              <div className="relative h-[260px]  sm:h-[340px] md:h-[390px] lg:h-[430px]">
                <ElasticMesh
                  text="ABOUT "
                  material="balloon"
                  color="red"
                  inflate={1}
                  stiffness={0.5}
                  wobble={0.6}
                  theme="dark"
                />
              </div>
            </motion.div>

            {/* LOGO MESH */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="relative mx-auto w-full min-w-0 max-w-[420px] overflow-hidden lg:col-span-5 lg:max-w-none"
            >
              <div className="relative h-[220px] w-full sm:h-[280px] md:h-[330px] lg:h-[390px]">
                <ElasticMesh
                  src="/logo.svg"
                  material="chrome"
                  imageColors={false}
                  grabRadius={70}
                  stretch={0.5}
                  press={0.5}
                  shadow={0.5}
                  intro
                />
              </div>
            </motion.div>

          </div>

          <div className="mt-5 flex flex-wrap justify-between gap-2 border-t border-black pt-4 text-[10px] font-bold tracking-[0.15em] sm:mt-8 sm:text-xs">
            <span>THE PERSON BEHIND THE CODE</span>
            <span>CREATIVITY / DEVELOPMENT</span>
          </div>
        </div>

        {/* MAIN ABOUT CONTENT */}
        <div className="mt-16 grid grid-cols-1 items-center gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="order-2 min-w-0 lg:order-1 lg:col-span-7">

            <Reveal>
              <span className="inline-block bg-[#E3332B] px-3 py-2 text-[10px] font-black tracking-widest text-white">
                FULL STACK DEVELOPER
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mt-7 text-[clamp(2.8rem,6vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">
                I BUILD
                <br />
                <span className="text-[#E3332B]">DIGITAL</span>
                <br />
                EXPERIENCES.
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-black/70 sm:text-xl">
                I'm Abdul Rehman, a Full Stack Developer passionate
                about building modern web applications and software
                that solve real-world problems.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-black/55 sm:text-base">
                I enjoy turning ideas into functional products —
                from intuitive interfaces to reliable backend systems.
                My focus is on clean development, practical solutions
                and continuous improvement.
              </p>
            </Reveal>

            {/* QUOTE */}
            <Reveal delay={0.4}>
              <div className="mt-12 max-w-2xl border-t border-black pt-6">
                <span className="text-[10px] font-black tracking-[0.2em] text-[#E3332B] sm:text-xs">
                  MY APPROACH
                </span>

                <p className="mt-5 text-3xl font-black uppercase leading-tight tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                  I DON'T JUST BUILD APPS.
                  <span className="text-[#E3332B]">
                    {" "}I BUILD SYSTEMS THAT LAST.
                  </span>
                </p>
              </div>
            </Reveal>

          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 min-w-0 lg:order-2 lg:col-span-5">
            <ProfileImage imageY={smoothImageY} />
          </div>

        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-24 border-y-2 border-black py-8 sm:mt-32">

          <Reveal>
            <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
              <h4 className="text-xs font-black tracking-[0.2em] sm:text-sm">
                TECHNOLOGIES I WORK WITH
              </h4>

              <span className="text-xs font-black text-[#E3332B]">
                MY TOOLKIT / 001
              </span>
            </div>
          </Reveal>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -7,
                  backgroundColor: "#E3332B",
                  color: "#FFFFFF",
                  borderColor: "#E3332B",
                }}
                className="cursor-default border border-black px-4 py-3 text-[10px] font-black tracking-wider transition-colors sm:px-5 sm:text-xs"
              >
                {tech}
              </motion.span>
            ))}
          </div>

        </div>

        {/* BOTTOM ACCENT LINE */}
        <motion.div
          style={{
            scaleX: lineScale,
            transformOrigin: "left",
          }}
          className="mt-16 h-[5px] w-full bg-[#E3332B]"
        />

      </div>
    </section>
  );
}
