
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavigation = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#F7F7F4]/90 px-4 backdrop-blur-xl sm:px-8 lg:px-12">

      <div className="mx-auto flex h-[76px] max-w-[1800px] items-center justify-between">

        {/* LOGO */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group relative z-50 text-3xl font-black tracking-tighter text-[#171717]"
        >
          AR<span className="text-[#E3332B]">.</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#E3332B] transition-all duration-300 group-hover:w-full" />
        </motion.a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-2 md:flex">
          {items.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => handleNavigation(item.label)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`relative rounded-full px-5 py-3 text-[11px] font-bold tracking-widest transition-colors duration-300 ${
                active === item.label
                  ? "text-white"
                  : "text-black/55 hover:text-black"
              }`}
            >
              {active === item.label && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-black"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <span className="relative z-10">{item.label.toUpperCase()}</span>
            </motion.a>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <motion.a
          href="mailto:your-email@example.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group hidden items-center gap-3 overflow-hidden bg-[#E3332B] px-6 py-4 text-[10px] font-bold tracking-widest text-white transition-colors duration-300 hover:bg-black sm:flex"
        >
          LET'S CONNECT
          <motion.span
            className="text-base"
            whileHover={{ x: 4, y: -4 }}
          >
            ↗
          </motion.span>
        </motion.a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-black/15 md:hidden"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-5 bg-black"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-5 bg-black"
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/10 md:hidden"
          >
            <nav className="flex flex-col gap-1 py-5">
              {items.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavigation(item.label)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className={`flex items-center justify-between px-3 py-4 text-xl font-black tracking-tight ${
                    active === item.label
                      ? "text-[#E3332B]"
                      : "text-black/70"
                  }`}
                >
                  {item.label.toUpperCase()}
                  <span className="text-sm">↗</span>
                </motion.a>
              ))}

              <a
                href="mailto:your-email@example.com"
                className="mt-4 flex items-center justify-between bg-[#E3332B] px-5 py-4 text-xs font-bold tracking-widest text-white"
              >
                LET'S CONNECT <span className="text-lg">↗</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
