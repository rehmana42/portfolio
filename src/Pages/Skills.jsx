
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const skillGroups = [
  {
    id: "frontend",
    number: "01",
    name: "FRONTEND",
    description: "Building interactive and responsive user experiences.",
    skills: [
      {
        name: "React",
        short: "RE",
        description:
          "Building component-based interfaces and dynamic web applications using React.",
        type: "UI LIBRARY",
      },
      {
        name: "Tailwind CSS",
        short: "TW",
        description:
          "Creating responsive, consistent and modern interfaces using utility-first styling.",
        type: "CSS FRAMEWORK",
      },
      {
        name: "TypeScript",
        short: "TS",
        description:
          "Writing structured and type-safe JavaScript applications.",
        type: "PROGRAMMING LANGUAGE",
      },
      {
        name: "HTML",
        short: "HT",
        description:
          "Structuring accessible and semantic web content.",
        type: "MARKUP LANGUAGE",
      },
      {
        name: "CSS",
        short: "CS",
        description:
          "Styling web interfaces with layouts, animations and responsive design.",
        type: "STYLING",
      },
    ],
  },
  {
    id: "backend",
    number: "02",
    name: "BACKEND",
    description: "Developing server-side systems, APIs and data management.",
    skills: [
      {
        name: "Node.js",
        short: "NO",
        description:
          "Building server-side applications and backend services using JavaScript.",
        type: "RUNTIME ENVIRONMENT",
      },
      {
        name: "Express.js",
        short: "EX",
        description:
          "Creating REST APIs, routes, middleware and backend application logic.",
        type: "BACKEND FRAMEWORK",
      },
      {
        name: "MongoDB",
        short: "MO",
        description:
          "Managing application data using a flexible NoSQL document database.",
        type: "DATABASE",
      },
      {
        name: "SQL",
        short: "SQ",
        description:
          "Working with relational data, queries, joins and database structures.",
        type: "QUERY LANGUAGE",
      },
    ],
  },
  {
    id: "languages",
    number: "03",
    name: "LANGUAGES",
    description: "The programming languages behind my development workflow.",
    skills: [
      {
        name: "JavaScript",
        short: "JS",
        description:
          "Writing application logic, interactive interfaces and server-side functionality.",
        type: "PROGRAMMING LANGUAGE",
      },
      {
        name: "Python",
        short: "PY",
        description:
          "Using Python for general-purpose programming and backend development.",
        type: "PROGRAMMING LANGUAGE",
      },
    ],
  },
];

function SkillCard({ skill, index, active, onClick }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(x, { stiffness: 180, damping: 18 });

  const handleMove = (e) => {
    if (window.innerWidth < 768) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    x.set((px - 0.5) * 9);
    y.set((0.5 - py) * 9);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{
        duration: 0.4,
        delay: index * 0.055,
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
      className={`group relative min-h-[145px] overflow-hidden border p-4 text-left transition-colors duration-300 sm:min-h-[175px] sm:p-5 ${
        active
          ? "border-[#E3332B] bg-[#171717] text-[#F8F7F1]"
          : "border-black/15 bg-[#F8F7F1] text-[#171717] hover:border-[#171717]"
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`text-[10px] font-bold tracking-widest ${
            active ? "text-white/40" : "text-black/35"
          }`}
        >
          0{index + 1}
        </span>

        <motion.span
          animate={{ rotate: active ? 45 : 0 }}
          className={`text-xl ${
            active ? "text-[#E3332B]" : "text-black/30"
          }`}
        >
          ↗
        </motion.span>
      </div>

      <div className="mt-5 flex items-end justify-between gap-2">
        <div>
          <span
            className={`block text-3xl font-black tracking-[-0.08em] sm:text-4xl ${
              active ? "text-[#E3332B]" : "text-black/15"
            }`}
          >
            {skill.short}
          </span>

          <h3 className="mt-2 text-base font-black tracking-tight sm:text-lg">
            {skill.name}
          </h3>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          scaleX: active ? 1 : 0,
        }}
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-[#E3332B]"
      />
    </motion.button>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [activeSkill, setActiveSkill] = useState("React");

  const currentGroup =
    skillGroups.find((group) => group.id === activeCategory) ||
    skillGroups[0];

  const selectedSkill =
    currentGroup.skills.find((skill) => skill.name === activeSkill) ||
    currentGroup.skills[0];

  const changeCategory = (group) => {
    setActiveCategory(group.id);
    setActiveSkill(group.skills[0].name);
  };

  return (
    <section
      id="skills"
      className="overflow-hidden bg-[#F7F7F4] px-5 py-24 text-[#171717] sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1450px]">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-b border-black/20 pb-10"
        >
          <div className="mb-7 flex items-center justify-between gap-4">
            <p className="text-[10px] font-black tracking-[0.3em] text-[#E3332B]">
              THE DEVELOPER TOOLKIT / 2026
            </p>

            <span className="text-[9px] font-bold tracking-widest text-black/35">
              SKILLS / 001—011
            </span>
          </div>

          <h2 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-[0.76] tracking-[-0.095em]">
            MY
            <br />
            TOOLKIT<span className="text-[#E3332B]">.</span>
          </h2>

          <div className="mt-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <p className="max-w-md text-sm leading-7 text-black/55">
              Technologies and tools I use to transform ideas into
              functional digital products and reliable applications.
            </p>

            <span className="text-[9px] font-bold tracking-[0.2em] text-black/35">
              SELECT A TECHNOLOGY TO EXPLORE ↘
            </span>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.5fr] lg:gap-16">

          {/* Left category navigation */}
          <div className="flex flex-col">
            <p className="mb-5 text-[9px] font-black tracking-[0.25em] text-black/35">
              SKILL CATEGORIES / 03
            </p>

            <div className="flex flex-col border-t border-black/20">
              {skillGroups.map((group) => {
                const active = activeCategory === group.id;

                return (
                  <motion.button
                    key={group.id}
                    type="button"
                    onClick={() => changeCategory(group)}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative flex items-center justify-between gap-3 border-b border-black/20 py-6 text-left transition-colors ${
                      active
                        ? "text-[#E3332B]"
                        : "text-black/35 hover:text-black"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold">
                        {group.number}
                      </span>

                      <span className="text-2xl font-black tracking-[-0.06em] sm:text-3xl">
                        {group.name}
                      </span>
                    </div>

                    <motion.span
                      animate={{
                        rotate: active ? 45 : 0,
                        opacity: active ? 1 : 0.3,
                      }}
                      className="text-xl"
                    >
                      ↗
                    </motion.span>

                    {active && (
                      <motion.div
                        layoutId="activeCategoryLine"
                        className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#E3332B]"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Featured skill information */}
            <div className="relative mt-8 min-h-[240px] overflow-hidden bg-[#171717] p-6 text-[#F8F7F1] sm:p-8">
              <div className="absolute -right-5 -top-12 text-[160px] font-black leading-none text-white/[0.035]">
                {selectedSkill.short}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <p className="text-[9px] font-bold tracking-[0.25em] text-[#E3332B]">
                    CURRENTLY EXPLORING
                  </p>

                  <h3 className="mt-5 text-4xl font-black tracking-[-0.07em]">
                    {selectedSkill.name}
                    <span className="text-[#E3332B]">.</span>
                  </h3>

                  <p className="mt-3 text-[9px] font-bold tracking-[0.15em] text-white/35">
                    {selectedSkill.type}
                  </p>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
                    {selectedSkill.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#E3332B]" />
            </div>
          </div>

          {/* Right skill grid */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGroup.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-7 flex flex-col justify-between gap-3 border-b border-black/20 pb-5 sm:flex-row sm:items-end">
                  <div>
                    <p className="mb-2 text-[9px] font-black tracking-[0.2em] text-[#E3332B]">
                      {currentGroup.number} / TECHNOLOGY COLLECTION
                    </p>

                    <h3 className="text-3xl font-black tracking-[-0.07em] sm:text-4xl">
                      {currentGroup.name}
                    </h3>
                  </div>

                  <span className="text-[10px] font-bold tracking-widest text-black/35">
                    {String(currentGroup.skills.length).padStart(2, "0")} SKILLS
                  </span>
                </div>

                <p className="mb-6 max-w-md text-xs leading-6 text-black/50">
                  {currentGroup.description}
                </p>

                <motion.div
                  layout
                  className="grid grid-cols-2 gap-3 sm:grid-cols-2 xl:grid-cols-3"
                >
                  <AnimatePresence mode="popLayout">
                    {currentGroup.skills.map((skill, index) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        index={index}
                        active={selectedSkill.name === skill.name}
                        onClick={() => setActiveSkill(skill.name)}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-black/20 pt-6 sm:flex-row sm:items-center">
          <p className="text-[9px] font-bold tracking-[0.2em] text-black/35">
            BUILT WITH CURIOSITY. DEVELOPED WITH PURPOSE.
          </p>

          <p className="text-[9px] font-black tracking-[0.2em]">
            ABDUL REHMAN <span className="text-[#E3332B]">/</span> DEVELOPER
          </p>
        </div>
      </div>
    </section>
  );
}
