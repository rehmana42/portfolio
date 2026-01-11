import React, { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import gsap from "gsap";

const Contact = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          immediateRender: false,
        }
      );

      gsap.fromTo(
        leftRef.current.children,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          immediateRender: false,
        }
      );

      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.4,
          immediateRender: false,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    id="contact"
      ref={containerRef}
      className="min-h-screen w-full bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div ref={leftRef} className="text-white space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s <span className="text-emerald-400">Connect</span>
          </h1>

          <p className="text-white/70 max-w-md leading-relaxed">
            Interested in working together or discussing a project?
            Feel free to reach out — I’m always open to opportunities.
          </p>

          {/* CTA */}
          <button
            ref={ctaRef}
            onClick={()=>{window.open("mailto:ak6935846@gmail.com")}}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
          >
            Let’s Talk <ArrowRight size={18} />
          </button>
        </div>

        {/* CONTACT CARDS */}
        <div
          ref={cardsRef}
          className="grid gap-6"
        >
          {/* EMAIL */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 hover:border-emerald-400/40 transition">
            <Mail className="text-emerald-400" />
            <div>
              <p className="text-white font-medium">Email</p>
              <span className="text-white/70 text-sm">
                ak6935846@gmail.com
              </span>
            </div>
          </div>

          {/* PHONE */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 hover:border-emerald-400/40 transition">
            <Phone className="text-emerald-400" />
            <div>
              <p className="text-white font-medium">Phone</p>
              <span className="text-white/70 text-sm">
                +91 7208757995
              </span>
            </div>
          </div>

          {/* LOCATION */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 hover:border-emerald-400/40 transition">
            <MapPin className="text-emerald-400" />
            <div>
              <p className="text-white font-medium">Location</p>
              <span className="text-white/70 text-sm">
                Mumbai, India
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
