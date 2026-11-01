
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const plans = [
  {
    id: "website",
    number: "01",
    title: "Website",
    description: "Landing pages & business websites",
    price: "₹10,000",
  },
  {
    id: "ecommerce",
    number: "02",
    title: "E-commerce",
    description: "Online stores & shopping platforms",
    price: "₹40,000",
  },
  {
    id: "custom",
    number: "03",
    title: "Custom Software",
    description: "CRM, dashboards & web applications",
    price: "₹50,000",
  },
  {
    id: "other",
    number: "04",
    title: "Something Else",
    description: "Have a different idea in mind?",
    price: "Let's discuss",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const selectedPlan = plans.find(
    (plan) => plan.id === formData.plan
  );

  const buttonX = useMotionValue(0);
  const buttonY = useMotionValue(0);
  const springX = useSpring(buttonX, { stiffness: 180, damping: 15 });
  const springY = useSpring(buttonY, { stiffness: 180, damping: 15 });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const selectPlan = (id) => {
    setFormData((prev) => ({
      ...prev,
      plan: id,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") return;

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      setStatus("error");
      console.error("EmailJS environment variables are missing.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          selected_plan: selectedPlan?.title || "Not selected",
          plan_price: selectedPlan?.price || "",
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      plan: "",
      message: "",
    });
    setStatus("idle");
  };

  const fieldClass =
    "w-full bg-transparent border-b border-[#171717]/20 py-4 text-[#171717] placeholder:text-[#171717]/30 outline-none transition-all duration-300 focus:border-[#E3332B] focus:border-b-2";

  const reveal = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="relative bg-[#F7F7F4] text-[#171717] px-5 md:px-10 lg:px-16 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-[#171717]/20 pb-5 mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#E3332B] rounded-full" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em]">
              CONTACT / LET'S COLLABORATE
            </span>
          </div>

          <span className="hidden sm:block text-xs tracking-widest text-[#171717]/40">
            AVAILABLE FOR PROJECTS ↗
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          <div className="lg:col-span-5">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-xs font-semibold tracking-[0.25em] text-[#E3332B] mb-6">
                GOT AN IDEA?
              </p>

              <h2 className="text-[clamp(3.8rem,8vw,8.5rem)] font-black leading-[0.78] tracking-[-0.09em]">
                LET'S
                <br />
                MAKE
                <br />
                <span className="text-[#E3332B]">IT.</span>
              </h2>

              <p className="mt-10 max-w-sm text-sm md:text-base leading-7 text-[#171717]/60">
                Every great project starts with a conversation.
                Tell me what you're planning. I'll help you turn
                that idea into a real digital product.
              </p>

              {/* Decorative interaction */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="mt-14 relative w-28 h-28 border border-[#171717]/20 rounded-full flex items-center justify-center"
              >
                <span className="text-4xl font-light text-[#E3332B]">
                  ↗
                </span>
                <div className="absolute -top-1 left-1/2 w-2 h-2 bg-[#E3332B] rounded-full" />
              </motion.div>

              <div className="mt-12 border-t border-[#171717]/20 pt-5">
                <p className="text-[10px] tracking-[0.2em] text-[#171717]/40 mb-3">
                  WHAT I DO
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "MERN Stack",
                    "E-commerce",
                    "CRM",
                    "Automation",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-xs border border-[#171717]/20 px-3 py-2 hover:bg-[#171717] hover:text-white transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form side */}
          <div className="lg:col-span-7">

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-[650px] flex flex-col justify-center border border-[#171717]/15 p-8 md:p-14"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      delay: 0.2,
                    }}
                    className="w-20 h-20 bg-[#E3332B] text-white flex items-center justify-center text-4xl mb-10"
                  >
                    ✓
                  </motion.div>

                  <p className="text-xs font-bold tracking-[0.2em] text-[#E3332B] mb-5">
                    MESSAGE RECEIVED / 100%
                  </p>

                  <h3 className="text-5xl md:text-7xl font-black tracking-[-0.07em] leading-[0.85]">
                    THANK
                    <br />
                    <span className="text-[#E3332B]">YOU!</span>
                  </h3>

                  <p className="mt-8 max-w-md text-[#171717]/60 leading-7">
                    Your project enquiry has been sent successfully.
                    I'll review your details and get back to you soon.
                  </p>

                  <button
                    onClick={resetForm}
                    className="mt-12 w-fit border-b-2 border-[#E3332B] pb-2 text-sm font-bold hover:text-[#E3332B] transition-colors"
                  >
                    SEND ANOTHER MESSAGE ↗
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="border border-[#171717]/15 p-6 md:p-10 lg:p-12"
                >
                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <p className="text-xs tracking-[0.2em] font-bold">
                        PROJECT ENQUIRY
                      </p>
                      <p className="text-xs text-[#171717]/40 mt-2">
                        Fill in the details below
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-3xl font-black text-[#E3332B]">
                        01
                      </span>
                      <p className="text-[9px] tracking-widest text-[#171717]/40">
                        START HERE
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-10">

                    {/* Name and email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                      >
                        <label className="text-[10px] font-bold tracking-[0.2em]">
                          01 — YOUR NAME
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className={fieldClass}
                          required
                          maxLength={100}
                        />
                      </motion.div>

                      <div>
                        <label className="text-[10px] font-bold tracking-[0.2em]">
                          02 — EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={fieldClass}
                          required
                          maxLength={254}
                        />
                      </div>
                    </div>

                    {/* Service selection */}
                    <div>
                      <div className="flex justify-between items-end mb-5">
                        <div>
                          <label className="text-[10px] font-bold tracking-[0.2em]">
                            03 — WHAT DO YOU NEED?
                          </label>
                          <p className="text-xs text-[#171717]/40 mt-2">
                            Select the service you're interested in.
                          </p>
                        </div>
                        <span className="text-xs text-[#E3332B]">
                          Required *
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {plans.map((plan, index) => {
                          const active = formData.plan === plan.id;

                          return (
                            <motion.button
                              key={plan.id}
                              type="button"
                              onClick={() => selectPlan(plan.id)}
                              whileHover={{ y: -4 }}
                              whileTap={{ scale: 0.98 }}
                              className={`relative text-left p-5 border transition-all duration-300 overflow-hidden ${
                                active
                                  ? "border-[#E3332B] bg-[#E3332B]/[0.05]"
                                  : "border-[#171717]/15 hover:border-[#171717]/50"
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <span className={`text-xs font-bold ${
                                  active ? "text-[#E3332B]" : "text-[#171717]/40"
                                }`}>
                                  {plan.number}
                                </span>

                                <motion.span
                                  animate={{
                                    scale: active ? 1 : 0.7,
                                    opacity: active ? 1 : 0.35,
                                  }}
                                  className={`w-5 h-5 border flex items-center justify-center text-xs ${
                                    active
                                      ? "bg-[#E3332B] border-[#E3332B] text-white"
                                      : "border-[#171717]/30"
                                  }`}
                                >
                                  {active ? "✓" : "+"}
                                </motion.span>
                              </div>

                              <h3 className={`mt-5 font-bold text-lg tracking-tight ${
                                active ? "text-[#E3332B]" : ""
                              }`}>
                                {plan.title}
                              </h3>

                              <p className="text-xs text-[#171717]/50 mt-1">
                                {plan.description}
                              </p>

                              <div className="mt-5 flex justify-between items-center">
                                <span className="text-sm font-bold">
                                  {plan.price}
                                </span>
                                {active && (
                                  <motion.span
                                    layoutId="selected-plan"
                                    className="absolute inset-0 border-2 border-[#E3332B] pointer-events-none"
                                  />
                                )}
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-bold tracking-[0.2em]">
                          04 — TELL ME ABOUT YOUR IDEA
                        </label>
                        <span className="text-[10px] text-[#171717]/40">
                          {formData.message.length}/2000
                        </span>
                      </div>

                      <textarea
                        name="message"
                        rows={4}
                        placeholder="What are you looking to build? Share your idea, features or requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`${fieldClass} resize-none`}
                        required
                        minLength={10}
                        maxLength={2000}
                      />
                    </div>

                    {/* Live project summary */}
                    <motion.div
                      layout
                      className="bg-[#171717] text-white p-5 md:p-6"
                    >
                      <div className="flex justify-between items-center border-b border-white/15 pb-4">
                        <p className="text-[10px] tracking-[0.2em] text-white/50">
                          YOUR PROJECT SUMMARY
                        </p>
                        <span className="text-[#E3332B] text-xs">
                          LIVE PREVIEW ↗
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-5 pt-5">
                        <div>
                          <p className="text-[9px] tracking-widest text-white/40 mb-2">
                            CLIENT
                          </p>
                          <p className="text-sm font-semibold truncate">
                            {formData.name || "Your name"}
                          </p>
                        </div>

                        <div>
                          <p className="text-[9px] tracking-widest text-white/40 mb-2">
                            SERVICE
                          </p>
                          <p className="text-sm font-semibold truncate">
                            {selectedPlan?.title || "Not selected"}
                          </p>
                        </div>

                        <div>
                          <p className="text-[9px] tracking-widest text-white/40 mb-2">
                            ESTIMATED STARTING PRICE
                          </p>
                          <p className="text-sm font-semibold text-[#E3332B]">
                            {selectedPlan?.price || "TBD"}
                          </p>
                        </div>

                        <div>
                          <p className="text-[9px] tracking-widest text-white/40 mb-2">
                            MESSAGE STATUS
                          </p>
                          <p className="text-sm font-semibold">
                            {formData.message.length >= 10
                              ? "Ready to send"
                              : "Awaiting details"}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Error */}
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-sm text-[#E3332B] font-semibold"
                        >
                          Unable to send your message. Check your EmailJS
                          settings and try again.
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Submit button */}
                    <div
                      className="relative"
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        buttonX.set((e.clientX - rect.left - rect.width / 2) * 0.06);
                        buttonY.set((e.clientY - rect.top - rect.height / 2) * 0.06);
                      }}
                      onMouseLeave={() => {
                        buttonX.set(0);
                        buttonY.set(0);
                      }}
                    >
                      <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        style={{ x: springX, y: springY }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-[#E3332B] text-white py-6 px-7 flex items-center justify-between hover:bg-[#171717] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <span className="text-sm font-bold tracking-[0.15em]">
                          {status === "sending"
                            ? "SENDING YOUR ENQUIRY..."
                            : "LET'S START SOMETHING"}
                        </span>

                        <motion.span
                          animate={{
                            x: status === "sending" ? 0 : [0, 7, 0],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: status === "sending" ? 0 : Infinity,
                          }}
                          className="text-2xl"
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </div>

                    <p className="text-[10px] text-center text-[#171717]/40 tracking-wide">
                      NO COMMITMENT. JUST A CONVERSATION ABOUT YOUR IDEA.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-24 border-t border-[#171717]/20 pt-6 flex flex-col sm:flex-row justify-between gap-4">
          <span className="text-[10px] tracking-[0.2em] text-[#171717]/50">
            GOOD IDEAS DESERVE GREAT EXECUTION.
          </span>
          <span className="text-[10px] tracking-[0.2em] text-[#171717]/50">
            ABDUL REHMAN © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
