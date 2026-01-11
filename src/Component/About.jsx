import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useEffect(() => {
    const heading = container.current.querySelector("#at1");
    const leftContent = container.current.querySelectorAll(".left-content > *:not(#at1)");
    const rightContent = container.current.querySelectorAll(".right-content > *");

    // 1️⃣ Initial state for animation
    gsap.set(heading, { clipPath: "inset(0 100% 0 0)" });
    gsap.set(leftContent, { y: 50, opacity: 0 });
    gsap.set(rightContent, { y: 50, opacity: 0 });

    // 2️⃣ Timeline for left side (Heading + content)
    const tlLeft = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=400", // scroll distance for pin + animation
        scrub: 1.2,
        pin: true,

      },
    });

    // Reveal heading
    tlLeft.to(heading, {
      clipPath: "inset(0 0% 0 0)",
      duration: 1.5,
      ease: "power3.out",
    });

    // Slide in left content
    tlLeft.to(
      leftContent,
      {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        ease: "power3.out",
      },
      "-=1" // overlap with heading animation
    );

    // 3️⃣ Right content animation (fade + slide)
    gsap.to(rightContent, {
      y: 0,
      opacity: 1,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top top+=100",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
    id="about"
      ref={container}
      className="w-full   min-h-screen px-6 sm:px-12 flex items-center bg-black"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE – STATEMENT */}
        <div className="flex flex-col gap-6 left-content">
          <h1
            id="at1"
            className="logo text-emerald-400 font-semibold text-4xl sm:text-5xl"
          >
            About Me
          </h1>

          <h2 className="font-extrabold text-4xl sm:text-6xl leading-tight text-white">
            I don’t just build apps.
            <br />
            <span className="text-emerald-400">I build systems that last.</span>
          </h2>

          <p className="text-gray-400 text-lg">
            Code is easy. Thinking clearly, structuring correctly, and scaling
            smartly — that’s where real development begins.
          </p>
        </div>

        {/* RIGHT SIDE – CONTENT */}
        <div className="flex flex-col gap-6 right-content text-gray-300 text-lg leading-relaxed fontB">
          <p>
            I am a{" "}
            <span className="text-white font-semibold">
              Web and Flutter Developer
            </span>{" "}
            focused on creating reliable, scalable, and user-centric digital
            products — not short-lived demos or fragile UI experiments.
          </p>

          <p>
            My work revolves around clean architecture, reusable components,
            and predictable data flows. I design applications that remain
            understandable months later — not just on day one.
          </p>

          <p>
            I have hands-on experience with REST APIs, authentication systems,
            real-time features, and modern state management. I’m comfortable
            handling async complexity and integrating third-party services
            without compromising stability.
          </p>

          <p>
            Performance, responsiveness, and accessibility are not
            afterthoughts for me. I actively optimize rendering, reduce
            unnecessary re-renders, and refine UX details that directly impact
            how users feel while using an application.
          </p>

          <p className="text-emerald-400 font-medium">
            I value clarity over shortcuts, simplicity over overengineering,
            and long-term impact over temporary hype.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
