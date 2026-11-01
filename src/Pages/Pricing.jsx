
import React from "react";
import { motion } from "framer-motion";
import ReflectiveCard from "@/components/ReflectiveCard";

const plans = [
  {
    number: "01",
    name: "STARTER",
    title: "Landing Page & Website",
    price: "10,000",
    description:
      "A professional online presence for individuals, startups and businesses.",
    features: [
      "Responsive website design",
      "Up to 5 pages",
      "Contact form integration",
      "Mobile and tablet optimized",
      "Basic SEO setup",
      "Social media integration",
    ],
    ideal: "PERSONAL BRANDS / SMALL BUSINESSES",
    popular: false,
  },
  {
    number: "02",
    name: "COMMERCE",
    title: "E-commerce Website",
    price: "40,000",
    description:
      "A complete online store designed to showcase products and manage orders.",
    features: [
      "Everything in Starter",
      "Product and category management",
      "Shopping cart and checkout",
      "Payment gateway integration",
      "Order management dashboard",
      "Customer authentication",
      "Admin dashboard",
    ],
    ideal: "RETAILERS / ONLINE STORES",
    popular: true,
  },
  {
    number: "03",
    name: "CUSTOM",
    title: "Software & CRM",
    price: "50,000",
    description:
      "Custom-built software to automate workflows and manage business operations.",
    features: [
      "Custom application development",
      "Admin and user dashboards",
      "Database architecture",
      "API development and integration",
      "Role-based access",
      "Business workflow automation",
      "CRM and management modules",
    ],
    ideal: "GROWING BUSINESSES / ENTERPRISES",
    popular: false,
  },
];

function PricingCard({ plan, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.13,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative h-full"
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 bg-[#E3332B] px-4 py-2 text-[9px] font-black tracking-[0.2em] text-white">
          MOST POPULAR
        </div>
      )}

      <div
        className={`h-full ${
          plan.popular
            ? "border-2 border-[#E3332B]"
            : "border border-black/15"
        }`}
      >
        <ReflectiveCard
          className="h-full"
          {...{}}
        >
          <div className="flex h-full flex-col bg-[#F8F7F1] p-6 text-[#171717] sm:p-7">

            {/* Card header */}
            <div className="flex items-center justify-between border-b border-black/15 pb-5">
              <span className="text-[10px] font-black tracking-[0.2em] text-[#E3332B]">
                PLAN / {plan.number}
              </span>

              <span className="text-[9px] font-bold tracking-widest text-black/35">
                {plan.name}
              </span>
            </div>

            {/* Title */}
            <div className="pt-7">
              <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-4xl">
                {plan.title}
                <span className="text-[#E3332B]">.</span>
              </h3>

              <p className="mt-4 min-h-[60px] text-xs leading-6 text-black/55">
                {plan.description}
              </p>
            </div>

            {/* Price */}
            <div className="my-7 border-y border-black/15 py-6">
              <p className="mb-2 text-[9px] font-black tracking-[0.2em] text-black/40">
                STARTING FROM
              </p>

              <div className="flex items-start gap-1">
                <span className="mt-2 text-xl font-bold">₹</span>

                <span className="text-5xl font-black tracking-[-0.08em] sm:text-6xl">
                  {plan.price}
                </span>
              </div>

              <p className="mt-2 text-[9px] font-bold tracking-widest text-black/35">
                FINAL PRICE DEPENDS ON REQUIREMENTS
              </p>
            </div>

            {/* Features */}
            <div className="flex-1">
              <p className="mb-5 text-[9px] font-black tracking-[0.2em] text-black/40">
                WHAT'S INCLUDED
              </p>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.06 }}
                    className="flex items-start gap-3 text-xs text-black/70"
                  >
                    <span className="font-black text-[#E3332B]">+</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Ideal for */}
            <div className="mt-8 border-t border-black/15 pt-5">
              <p className="text-[9px] font-black tracking-[0.15em] text-black/35">
                IDEAL FOR
              </p>

              <p className="mt-2 text-[10px] font-black tracking-wider">
                {plan.ideal}
              </p>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/91YOURNUMBER?text=${encodeURIComponent(
                `Hi, I'm interested in your ${plan.title} package starting at ₹${plan.price}. I'd like to discuss my requirements.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className={`mt-7 flex w-full items-center justify-between px-5 py-4 text-[10px] font-black tracking-[0.15em] transition-all duration-300 ${
                plan.popular
                  ? "bg-[#E3332B] text-white hover:bg-[#171717]"
                  : "bg-[#171717] text-white hover:bg-[#E3332B]"
              }`}
            >
              <span>LET'S DISCUSS</span>
              <span className="text-lg">↗</span>
            </a>
          </div>
        </ReflectiveCard>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="overflow-hidden bg-[#EAE9E3] px-5 py-24 text-[#171717] sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1450px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-8 border-b border-black/20 pb-9 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-6 text-[10px] font-black tracking-[0.3em] text-[#E3332B]">
              INVEST IN YOUR NEXT BIG IDEA / 003
            </p>

            <h2 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-[0.75] tracking-[-0.09em]">
              SIMPLE
              <br />
              PRICING<span className="text-[#E3332B]">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-black/55">
            Transparent starting prices for digital products that help
            businesses grow. Every solution can be customized to your needs.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.number}
              plan={plan}
              index={index}
            />
          ))}
        </div>

        {/* Custom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col justify-between gap-6 border-t border-black/20 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-[10px] font-black tracking-[0.2em] text-[#E3332B]">
              HAVE A DIFFERENT REQUIREMENT?
            </p>

            <h3 className="mt-3 text-2xl font-black tracking-[-0.05em] sm:text-3xl">
              LET'S BUILD SOMETHING CUSTOM.
            </h3>

            <p className="mt-2 text-xs leading-6 text-black/50">
              Tell me your idea and I'll prepare a solution around it.
            </p>
          </div>

          <a
            href="https://wa.me/91YOURNUMBER?text=Hi%2C%20I%20have%20a%20custom%20project%20requirement."
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center gap-8 bg-[#171717] px-6 py-4 text-[10px] font-black tracking-widest text-white transition-colors hover:bg-[#E3332B]"
          >
            GET A CUSTOM QUOTE <span className="text-lg">↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
