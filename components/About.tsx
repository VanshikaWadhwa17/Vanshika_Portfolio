"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, MapPin, Heart, Globe, MapPinned, Code2, Coffee } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "MSc Computing (Artificial Intelligence)",
    subtitle: "Dublin City University · 1:1 Expected · 2025–Present",
  },
  {
    icon: GraduationCap,
    title: "B.Tech Computer Science Engineering",
    subtitle: "DIT University · CGPA 7.5/10 · 2016–2020",
  },
  {
    icon: MapPin,
    title: "Based in Dublin, Ireland",
    subtitle: "Open to remote & on-site opportunities",
  },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="section-blob w-96 h-96 bg-[#6B2080] -top-20 -right-20" />
      <div className="section-blob w-72 h-72 bg-[#D4952A] bottom-0 left-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E879B8]/12 text-[#c2186b] text-sm font-semibold mb-4">
            <Heart className="w-4 h-4" /> About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
            Who I{" "}
            <span className="text-[#E879B8]">
              Am
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A passionate technologist bridging the gap between cutting-edge AI research and
            production-grade engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative card behind */}
              <div className="absolute -inset-4 bg-[#E879B8]/10 rounded-3xl -rotate-2 opacity-60" />
              <div className="relative glass rounded-3xl p-8 shadow-xl border border-white/80">
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  I am currently pursuing my MSc in Computing (AI) at{" "}
                  <span className="font-semibold text-slate-800">Dublin City University</span> and expecting a{" "}
                  <span className="font-semibold text-[#d946a8]">1:1</span> (First Class Honors). With 5+ years
                  of experience spanning FinTech, sustainability, and enterprise platforms, I specialize in bridging
                  frontend engineering with AI-driven product innovation.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  At <span className="font-semibold text-slate-800">IWBI</span>, I led microfrontend migration (Nuxt 2 →
                  Nuxt 3) and architected a modular monorepo ecosystem (Nx, PNPM) with a reusable UI library. I worked on
                  agentic AI workflows to streamline certification processes and improve operational efficiency at scale.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Previously at <span className="font-semibold text-slate-800">TransUnion</span>, I contributed to the
                  evolution of OneTru into an AI-first platform, working on low-code agent builders, workflow
                  orchestration, and developer tooling. I helped deliver an internal LLM-based coding assistant (73%
                  adoption) and built an AI engineering super-agent capable of generating code, UI, and system designs. I
                  also extended into MLaaS initiatives, enabling predictive intelligence within enterprise solutions.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  I thrive at the intersection of AI, scalable systems, and product engineering—turning complex ideas
                  into production-ready solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right – Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="glass rounded-2xl p-5 shadow-sm border border-white/80 flex items-center gap-5 cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-2xl bg-[#E879B8] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#E879B8]/25"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{item.title}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{item.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Fun fact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="glass rounded-2xl p-5 shadow-sm border border-white/80 bg-[#E879B8]/5"
            >
              <p className="text-sm font-semibold text-[#c2186b] mb-3 flex items-center gap-1.5">
                <MapPinned className="w-4 h-4" /> Quick Facts
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#E879B8] flex-shrink-0" /> Dublin, Ireland</div>
                <div className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-[#d946a8] flex-shrink-0" /> 5 years of experience</div>
                <div className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5 text-[#E879B8] flex-shrink-0" /> Data Science Enthusiast</div>
                <div className="flex items-center gap-1.5"><Coffee className="w-3.5 h-3.5 text-[#f472b6] flex-shrink-0" /> Fuelled by coffee</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
