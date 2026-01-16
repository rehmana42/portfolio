import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import { assets } from "@/assets/assets";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Project from "./Project";

const HeroSection = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#badge", {
      y: 20,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from("#title", {
        x: -100,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power4.out",
      })
      .from("#title2", {
        x: -100,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power4.out",
      })
      .from("#title3", {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
      })
      .from(".btn-group button", {
        y: 20,
        autoAlpha: 0,
        stagger: 0.2,
      });

    gsap.to(".hero-img", {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const [text] = useTypewriter({
    words: ["Frontend Developer", "Flutter Developer", "REST API Expert"],
    loop: true,
    delaySpeed: 1500,
  });

   const download=()=>{
    const link=document.createElement("a");
    link.href=`${assets.AbdulTemplate}`
    link.download='AbdulRehman_resume.pdf'
    link.click()

  }

  return (
    <section
    id="hero"
      ref={container}
      className="hero-bg relative  w-full flex flex-col sm:flex-row items-center justify-center gap-10 px-6 overflow-hidden"
    >
      {/* LEFT CONTENT */}
      <div className="relative flex flex-col gap-4 pl-6 max-w-xl">
        <span className="absolute left-0 top-2 h-[85%] w-[3px] bg-gradient-to-b from-emerald-400 to-teal-400 rounded-full" />

        {/* Badge */}
        <div
          id="badge"
          className="inline-flex w-fit items-center gap-2 px-5 py-2 rounded-full
          bg-white/5 backdrop-blur-lg border border-emerald-400/30
          text-emerald-400 text-sm shadow-[0_0_25px_rgba(16,185,129,0.25)]"
        >
          {text}
          <Cursor cursorColor="#10b981" />
        </div>

        <h1
          id="title"
          className="font-extrabold text-5xl sm:text-6xl
          bg-gradient-to-r from-emerald-400 to-teal-400
          bg-clip-text text-transparent"
        >
          Hello, I'm
        </h1>

        <h2
          id="title2"
          className="font-semibold text-4xl sm:text-5xl text-white"
        >
          Abdul Rehman
        </h2>

        <p
          id="title3"
          className="text-gray-300 text-base leading-relaxed"
        >
          I craft reliable, scalable, and user-centric digital solutions.
          Passionate about clean architecture, performance, and meaningful
          user experiences.
        </p>

        {/* Buttons */}
        <div className="btn-group flex gap-4 mt-6">
          <Button  onClick={() =>
    document.getElementById("project")?.scrollIntoView({
      behavior: "smooth",
    })
  }className="hero-btn1 px-6 py-6 rounded-2xl text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg">
            View My Work
          </Button>

          <Button onClick={()=>{download()}} className="hero-btn2 px-6 py-6 rounded-2xl bg-white text-black">
            Resume
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          {[{icon:Instagram, href:'https://www.instagram.com/khan_abdul103/'}, {icon:Linkedin, href:'https://www.linkedin.com/in/khan-abdul-rehman-shahnawaz'}, {icon:Github, href:'https://github.com/rehmana42'}].map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center rounded-full
              bg-white/10 backdrop-blur-md hover:bg-emerald-400/20
              hover:scale-110 transition cursor-pointer"
            >
              <Icon.icon onClick={()=>{window.open(Icon.href)}} className="w-5 h-5 text-white" />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-500/30 blur-3xl rounded-2xl -z-10" />
        <img
          src={assets.heroImage}
          alt="Hero"
          className="hero-img h-[65vh] rounded-2xl drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
