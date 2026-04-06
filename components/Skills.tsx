"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Cloud, Brain, BarChart3, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI & LLMs",
    border: "border-[#E879B8]/25",
    skills: [
      "OpenAI API (GPT-4)",
      "HuggingFace Transformers",
      "LangChain",
      "MCP Agents",
      "Agentic AI",
      "Prompt Engineering",
      "RAG Pipelines",
    ],
  },
  {
    icon: BarChart3,
    title: "ML & Deep Learning",
    border: "border-[#E879B8]/25",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "LSTM (TensorFlow/Keras)",
      "SARIMA / TBATS / ETS",
      "Random Forest",
      "Logistic Regression",
      "Associate Rule Mining"
    ],
  },
  {
    icon: Code2,
    title: "Languages",
    border: "border-[#E879B8]/25",
    skills: ["Python", "SQL", "JavaScript", "R", "TypeScript"],
  },
  {
    icon: Database,
    title: "Data & Pipelines",
    border: "border-[#E879B8]/25",
    skills: [
      "ETL / ELT",
      "Pandas / NumPy",
      "PostgreSQL / MongoDB",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    border: "border-[#E879B8]/25",
    skills: [
      "GCP",
      "Docker",
      "Jenkins",
      "FastAPI",
      "CI/CD",
      "Git / GitHub",
      "REST APIs"
    ],
  },
  {
    icon: Wrench,
    title: "Visualisation & BI",
    border: "border-[#E879B8]/25",
    skills: [
      "Power BI",
      "Streamlit",
      "Snowsight",
      "Matplotlib / Seaborn",
      "Plotly",
      "Excel",
      "MERN Stack",
      "Vue",
      "Nuxt"
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-white via-[#6B2080]/3 to-white"
    >
      <div className="section-blob w-80 h-80 bg-[#D4952A] top-10 -left-20" />
      <div className="section-blob w-80 h-80 bg-[#C57BB8] bottom-10 -right-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E879B8]/12 text-[#c2186b] text-sm font-semibold mb-4">
            <Code2 className="w-4 h-4" /> Technical Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
            My{" "}
            <span className="text-[#E879B8]">
              Toolkit
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            A comprehensive stack spanning AI, data engineering, cloud, and full-stack development.
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`gradient-border glass rounded-2xl p-6 shadow-sm border ${category.border} transition-all duration-300 bg-[#E879B8]/5`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl bg-[#E879B8] flex items-center justify-center shadow-md shadow-[#E879B8]/25"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="skill-tag px-3 py-1.5 rounded-full text-xs font-semibold cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 glass rounded-3xl p-8 shadow-sm border border-white/80"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
            Core Language Proficiency
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
            {[
              { lang: "Python",     pct: 95 },
              { lang: "SQL",        pct: 88 },
              { lang: "R",          pct: 82 },
              { lang: "JavaScript", pct: 95 },
              { lang: "TypeScript", pct: 70 },
            ].map(({ lang, pct }) => (
              <div key={lang}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-semibold text-slate-700">{lang}</span>
                  <span className="text-sm text-slate-500">{pct}%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${pct}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    className="h-full bg-[#E879B8] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
