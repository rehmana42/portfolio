import React, { useRef, useState } from "react";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

import {
  ArrowUpRight,
  Globe,
  Code2,
  Users,
  ShoppingBag,
  MessageCircle,
  Mail,
  LayoutDashboard,
  BrainCircuit,
  Utensils,
  QrCode,
} from "lucide-react";

/* =========================================
   SERVICES DATA
========================================= */

const services = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Website Development",
    description:
      "Modern, responsive and high-performance websites designed to turn visitors into customers.",
    tag: "DIGITAL PRESENCE",
    icon: Globe,
    accent: "#45BAFC",
    visual: "web",
  },
  {
    number: "02",
    category: "SOFTWARE DEVELOPMENT",
    title: "Custom Software",
    description:
      "Powerful software solutions built around your business workflow and requirements.",
    tag: "BUILT AROUND YOU",
    icon: Code2,
    accent: "#C5BAFF",
    visual: "software",
  },
  {
    number: "03",
    category: "BUSINESS MANAGEMENT",
    title: "CRM Software",
    description:
      "Manage customers, leads, sales pipelines and business relationships from one place.",
    tag: "CUSTOMER CONTROL",
    icon: Users,
    accent: "#B9F56A",
    visual: "crm",
  },
  {
    number: "04",
    category: "E-COMMERCE",
    title: "E-commerce Solutions",
    description:
      "Scalable online stores with product management, orders, payments and analytics.",
    tag: "SELL SMARTER",
    icon: ShoppingBag,
    accent: "#FFB88C",
    visual: "ecommerce",
  },
  {
    number: "05",
    category: "AUTOMATION",
    title: "WhatsApp Automation",
    description:
      "Automate customer communication, notifications, follow-ups and business workflows.",
    tag: "CONVERSATION AUTOMATION",
    icon: MessageCircle,
    accent: "#83E0D1",
    visual: "whatsapp",
  },
  {
    number: "06",
    category: "AUTOMATION",
    title: "Email Automation",
    description:
      "Automated emails for customer onboarding, reminders, updates and marketing campaigns.",
    tag: "SMART COMMUNICATION",
    icon: Mail,
    accent: "#FF9EC8",
    visual: "email",
  },
  {
    number: "07",
    category: "BUSINESS SOLUTIONS",
    title: "Management Software",
    description:
      "Manage employees, operations, inventory, reports and everyday business activities.",
    tag: "OPERATIONS CONTROL",
    icon: LayoutDashboard,
    accent: "#C5BAFF",
    visual: "management",
  },
  {
    number: "08",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI Integration",
    description:
      "Bring intelligent automation, AI-powered assistants and smart features into your products.",
    tag: "INTELLIGENCE BUILT IN",
    icon: BrainCircuit,
    accent: "#45BAFC",
    visual: "ai",
  },
  {
    number: "09",
    category: "RESTAURANT TECHNOLOGY",
    title: "Restaurant Management",
    description:
      "Simplify restaurant operations with order management, billing and kitchen workflows.",
    tag: "RESTAURANT OPERATIONS",
    icon: Utensils,
    accent: "#FFB88C",
    visual: "restaurant",
  },
  {
    number: "10",
    category: "SMART ORDERING",
    title: "QR Food Ordering",
    description:
      "Let customers scan, browse menus and place orders directly from their smartphones.",
    tag: "SCAN. ORDER. ENJOY.",
    icon: QrCode,
    accent: "#B9F56A",
    visual: "qr",
  },
];

/* =========================================
   REVEAL ANIMATION
========================================= */

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

/* =========================================
   CUSTOM CARD VISUAL
========================================= */

function CardVisual({ service }) {
  const Icon = service.icon;

  return (
    <div className="relative flex h-[145px] items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/45">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(23,23,23,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,23,0.2)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Ambient glow */}
      <div
        className="absolute h-32 w-32 rounded-full opacity-50 blur-3xl"
        style={{ backgroundColor: service.accent }}
      />

      {/* Decorative orbit */}
      <motion.div
        className="absolute h-[110px] w-[190px] rounded-[50%] border border-black/10"
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute h-[90px] w-[155px] rounded-[50%] border border-black/10"
        animate={{
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating decorative shapes */}
      <motion.div
        className="absolute left-9 top-6 h-3 w-3 rotate-45 rounded-sm"
        style={{ backgroundColor: service.accent }}
        animate={{
          y: [-5, 8, -5],
          rotate: [45, 135, 45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-5 right-10 h-4 w-4 rounded-full"
        style={{ backgroundColor: service.accent }}
        animate={{
          y: [5, -8, 5],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main icon object */}
      <motion.div
        className="relative z-10 flex h-[82px] w-[82px] items-center justify-center rounded-[25px] border border-white bg-gradient-to-br from-white via-white/90 to-[#E8F9FF] shadow-[0_20px_40px_rgba(7,27,44,0.15)]"
        whileHover={{
          rotate: 12,
          scale: 1.12,
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 12,
        }}
      >
        <div
          className="absolute inset-2 rounded-[19px] opacity-20 blur-lg"
          style={{ backgroundColor: service.accent }}
        />

        <Icon
          size={37}
          strokeWidth={1.6}
          className="relative z-10 text-[#071B2C]"
        />

        {/* Corner highlight */}
        <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-white shadow-[0_0_8px_white]" />
      </motion.div>

      {/* Visual label */}
      <div className="absolute bottom-3 left-4 flex items-center gap-2">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: service.accent }}
        />

        <span className="text-[8px] font-bold tracking-[0.2em] text-black/40">
          {service.visual.toUpperCase()} SYSTEM
        </span>
      </div>

      {/* Top right index */}
      <span className="absolute right-4 top-3 font-mono text-[9px] text-black/30">
        0{service.number}
      </span>
    </div>
  );
}

/* =========================================
   CUSTOM SERVICE CARD
========================================= */

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [7, -7]),
    { stiffness: 180, damping: 22 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
    { stiffness: 180, damping: 22 }
  );

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [70, 0, -70]
  );

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.92, 1, 0.92]
  );

  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
  });

  const scale = useSpring(rawScale, {
    stiffness: 80,
    damping: 20,
  });

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 120,
        rotateY: index % 2 === 0 ? -20 : 20,
        scale: 0.85,
        filter: "blur(12px)",
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
        duration: 1,
        delay: (index % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-[330px] w-[280px] shrink-0 snap-center sm:h-[360px] sm:w-[310px] lg:h-[390px] lg:w-[340px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.article
        style={{
          y,
          scale,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          y: -10,
          transition: {
            duration: 0.3,
          },
        }}
        className="relative h-full w-full overflow-hidden rounded-[25px] border border-white/80 bg-gradient-to-br from-white via-[#F8FBFF] to-[#EAF5FF] p-5 shadow-[0_15px_45px_rgba(7,27,44,0.09)] sm:p-6"
      >
        {/* Gradient border glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[25px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            boxShadow: `inset 0 0 0 1px ${service.accent}, 0 15px 40px ${service.accent}30`,
          }}
        />

        {/* Ambient light */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-25 blur-[65px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-50"
          style={{ backgroundColor: service.accent }}
        />

        {/* Large background number */}
        <span className="pointer-events-none absolute -bottom-10 -right-3 select-none text-[150px] font-black leading-none tracking-[-0.1em] text-[#071B2C]/[0.035]">
          {service.number}
        </span>

        {/* Reflection sweep */}
        <motion.div
          className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/80 to-transparent"
          animate={{
            x: ["0%", "500%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: service.accent }}
              />

              <span className="text-[9px] font-bold tracking-[0.17em] text-black/45">
                {service.category}
              </span>
            </div>

            <span className="font-mono text-xs text-black/35">
              /{service.number}
            </span>
          </div>

          {/* Visual */}
          <CardVisual service={service} />

          {/* Content */}
          <div>
            <h3 className="max-w-[270px] text-[27px] font-black leading-[1.05] tracking-[-0.06em] text-[#071B2C] sm:text-[30px]">
              {service.title}
            </h3>

            <p className="mt-3 max-w-[280px] text-[12px] leading-6 text-black/55">
              {service.description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-black/10 pt-4">
            <span className="text-[9px] font-bold tracking-[0.16em] text-black/45">
              {service.tag}
            </span>

            <motion.div
              whileHover={{
                rotate: 45,
                scale: 1.12,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg transition-colors duration-300"
              style={{
                backgroundColor: "#071B2C",
              }}
            >
              <ArrowUpRight onClick={"#contact"} size={18} />
            </motion.div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

/* =========================================
   MAIN SERVICES SECTION
========================================= */

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

  /* =========================================
     UPDATE ACTIVE CARD WHILE SCROLLING
  ========================================= */

  const updateActiveIndex = () => {
    const container = cardsContainerRef.current;

    if (!container) return;

    const cards = container.querySelectorAll(".service-card-item");

    if (!cards.length) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  /* =========================================
     SCROLL TO CARD
  ========================================= */

  const scrollCards = (direction) => {
    const container = cardsContainerRef.current;

    if (!container) return;

    const nextIndex = Math.max(
      0,
      Math.min(services.length - 1, activeIndex + direction)
    );

    const card = container.querySelectorAll(".service-card-item")[nextIndex];

    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(nextIndex);
  };

  const goToService = (index) => {
    const container = cardsContainerRef.current;

    if (!container) return;

    const card = container.querySelectorAll(".service-card-item")[index];

    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
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

          {/* RIGHT SERVICE CARDS */}
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

              {/* Navigation buttons */}
              <div className="hidden items-center gap-3 sm:flex">
                <button
                  onClick={() => scrollCards(-1)}
                  aria-label="Previous service"
                  disabled={activeIndex === 0}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 text-xl transition-all duration-300 hover:border-[#E3332B] hover:bg-[#E3332B] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ←
                </button>

                <button
                  onClick={() => scrollCards(1)}
                  aria-label="Next service"
                  disabled={activeIndex === services.length - 1}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#171717] text-xl text-white transition-all duration-300 hover:bg-[#E3332B] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  →
                </button>
              </div>
            </motion.div>

            {/* Horizontal carousel */}
            <div
              ref={cardsContainerRef}
              onScroll={updateActiveIndex}
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

            {/* Manual indicators */}
            <div className="mt-6 flex items-center gap-2">
              {services.map((service, index) => (
                <button
                  key={service.number}
                  onClick={() => goToService(index)}
                  aria-label={`Go to ${service.title}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-[4px] rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? "w-9 bg-[#E3332B]"
                      : "w-3 bg-black/15 hover:bg-[#E3332B]/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* its perfect */}
    </section>
  );
}