
import React, { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import ReflectiveCard from "@/components/ReflectiveCard";

const services = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Website Development",
    description:
      "Modern, responsive and high-performance websites designed to turn visitors into customers.",
    tag: "DIGITAL PRESENCE",
  },
  {
    number: "02",
    category: "SOFTWARE DEVELOPMENT",
    title: "Custom Software",
    description:
      "Powerful software solutions built around your business workflow and requirements.",
    tag: "BUILT AROUND YOU",
  },
  {
    number: "03",
    category: "BUSINESS MANAGEMENT",
    title: "CRM Software",
    description:
      "Manage customers, leads, sales pipelines and business relationships from one place.",
    tag: "CUSTOMER CONTROL",
  },
  {
    number: "04",
    category: "E-COMMERCE",
    title: "E-commerce Solutions",
    description:
      "Scalable online stores with product management, orders, payments and analytics.",
    tag: "SELL SMARTER",
  },
  {
    number: "05",
    category: "AUTOMATION",
    title: "WhatsApp Automation",
    description:
      "Automate customer communication, notifications, follow-ups and business workflows.",
    tag: "CONVERSATION AUTOMATION",
  },
  {
    number: "06",
    category: "AUTOMATION",
    title: "Email Automation",
    description:
      "Automated emails for customer onboarding, reminders, updates and marketing campaigns.",
    tag: "SMART COMMUNICATION",
  },
  {
    number: "07",
    category: "BUSINESS SOLUTIONS",
    title: "Management Software",
    description:
      "Manage employees, operations, inventory, reports and everyday business activities.",
    tag: "OPERATIONS CONTROL",
  },
  {
    number: "08",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI Integration",
    description:
      "Bring intelligent automation, AI-powered assistants and smart features into your products.",
    tag: "INTELLIGENCE BUILT IN",
  },
  {
    number: "09",
    category: "RESTAURANT TECHNOLOGY",
    title: "Restaurant Management",
    description:
      "Simplify restaurant operations with order management, billing and kitchen workflows.",
    tag: "RESTAURANT OPERATIONS",
  },
  {
    number: "10",
    category: "SMART ORDERING",
    title: "QR Food Ordering",
    description:
      "Let customers scan, browse menus and place orders directly from their smartphones.",
    tag: "SCAN. ORDER. ENJOY.",
  },
];

const revealUp = {
  hidden: {
    opacity: 0,
    y: 100,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [100, 0, -100]
  );

  const rawRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [8, 0, -8]
  );

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.88, 1, 0.88]
  );

  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
  });

  const rotateX = useSpring(rawRotate, {
    stiffness: 80,
    damping: 20,
  });

  const scale = useSpring(rawScale, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 150,
        rotateY: index % 2 === 0 ? -25 : 25,
        scale: 0.75,
        filter: "blur(15px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateY: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 1.1,
        delay: (index % 3) * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-[330px] w-[280px] shrink-0 snap-center sm:h-[360px] sm:w-[310px] lg:h-[390px] lg:w-[340px]"
    >
      <motion.div
        style={{
          y,
          rotateX,
          scale,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          y: -12,
          rotateX: 3,
          scale: 1.025,
          transition: {
            duration: 0.35,
          },
        }}
        className="relative h-full w-full"
      >
        <ReflectiveCard
          name=""
          role=""
          badge=""
          status=""
          theme="light"
          width="100%"
          height="100%"
          radius={20}
          metalness={0.65}
          roughness={0.4}
          blurStrength={8}
          grayscale={1}
          shine={1.2}
          glare={0.65}
          enableTilt
          tiltStrength={10}
          className="h-full w-full overflow-hidden"
        >
          <div className="flex h-full flex-col justify-between p-6 text-[#171717] sm:p-7">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-[#E3332B]">
                  {service.category}
                </span>

                <span className="font-mono text-sm text-black/40">
                  /{service.number}
                </span>
              </div>

              <h3 className="mt-12 max-w-[260px] text-3xl font-black leading-[1.05] tracking-[-0.06em] sm:text-4xl">
                {service.title}
              </h3>

              <p className="mt-5 max-w-[280px] text-sm leading-7 text-black/60">
                {service.description}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-black/15 pt-5">
              <span className="text-[10px] font-bold tracking-[0.15em] text-black/50">
                {service.tag}
              </span>

              <motion.div
                whileHover={{
                  rotate: 45,
                  scale: 1.15,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E3332B] text-xl text-white transition-colors"
              >
                ↗
              </motion.div>
            </div>
          </div>
        </ReflectiveCard>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.15,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(
    scrollYProgress,
    [0, 1],
    [130, -130]
  );

  const rightY = useTransform(
    scrollYProgress,
    [0, 1],
    [-80, 100]
  );

  const headingScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.85, 1, 0.9]
  );

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.4]
  );

  const scrollCards = (direction) => {
    const container = cardsContainerRef.current;

    if (!container) return;

    const card = container.querySelector(".service-card-item");
    const cardWidth = card?.getBoundingClientRect().width || 340;
    const gap = 24;

    container.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });

    setActiveIndex((previous) =>
      Math.max(
        0,
        Math.min(
          services.length - 1,
          previous + direction
        )
      )
    );
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-[#F7F7F4] py-24 text-[#171717] md:py-32 lg:py-40"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [100, -100]),
          }}
          className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-black/[0.04]"
        />

        <div className="absolute left-0 top-[25%] h-px w-full bg-black/[0.05]" />
        <div className="absolute left-0 top-[75%] h-px w-full bg-black/[0.05]" />

        <span className="absolute right-8 top-12 font-mono text-[10px] tracking-[0.3em] text-black/25">
          SERVICES / 001—010
        </span>
      </div>

      <div className="relative mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.5fr] lg:gap-24 xl:gap-32">

          {/* LEFT CONTENT */}
          <motion.div
            style={{
              y: leftY,
              scale: headingScale,
              opacity: headingOpacity,
            }}
            className="relative z-10 max-w-[500px]"
          >
            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="mb-8 flex items-center gap-3"
            >
              
            </motion.div>

            <motion.h2
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                  rotateX: -30,
                  filter: "blur(12px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 1.2,
                    staggerChildren: 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="text-6xl font-black uppercase leading-[0.9] tracking-[-0.075em] sm:text-7xl xl:text-[100px]"
            >
              <motion.span variants={revealUp} className="block">
                Building
              </motion.span>

              <motion.span
                variants={revealUp}
                className="block text-[#E3332B]"
              >
                Digital
              </motion.span>

              <motion.span variants={revealUp} className="block">
                Solutions.
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10 max-w-[390px] text-base leading-8 text-black/60 sm:text-lg"
            >
              I build digital products that solve real business
              problems — from high-performance websites to
              intelligent software and automation systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-5 border-b-2 border-[#171717] pb-3 text-sm font-bold uppercase tracking-[0.12em] transition-colors hover:border-[#E3332B] hover:text-[#E3332B]"
              >
                Let's Build Something

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                <span className="h-3 w-3 rounded-full border-2 border-[#F7F7F4] bg-[#E3332B]" />
                <span className="h-3 w-3 rounded-full border-2 border-[#F7F7F4] bg-black/50" />
                <span className="h-3 w-3 rounded-full border-2 border-[#F7F7F4] bg-black/20" />
              </div>

              <span className="text-xs font-medium tracking-wide text-black/45">
                FROM IDEA TO EXECUTION
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            style={{ y: rightY }}
            className="relative min-w-0"
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-8 flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-black/40">
                  EXPLORE MY SERVICES
                </span>

                <p className="mt-2 text-sm text-black/50">
                  Scroll to discover what we can create.
                </p>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <button
                  onClick={() => scrollCards(-1)}
                  aria-label="Previous services"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 text-xl transition-all duration-300 hover:border-[#E3332B] hover:bg-[#E3332B] hover:text-white"
                >
                  ←
                </button>

                <button
                  onClick={() => scrollCards(1)}
                  aria-label="Next services"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#171717] text-xl text-white transition-all duration-300 hover:bg-[#E3332B]"
                >
                  →
                </button>
              </div>
            </motion.div>

            {/* Horizontal carousel */}
            <div
              ref={cardsContainerRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden pb-8 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className="service-card-item"
                >
                  <ServiceCard
                    service={service}
                    index={index}
                  />
                </div>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <div className="h-[2px] w-20 overflow-hidden bg-black/10">
                  <motion.div
                    className="h-full bg-[#E3332B]"
                    animate={{
                      width: `${((activeIndex + 1) / services.length) * 100}%`,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <span className="font-mono text-sm text-black/40">
                  {String(services.length).padStart(2, "0")}
                </span>
              </div>

              <span className="text-[10px] font-bold tracking-[0.2em] text-black/40">
                DRAG / SCROLL
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
