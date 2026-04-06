"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink, Github, Star, Layers, Globe,
  Bot, Newspaper, PlaneTakeoff, ShoppingCart, Droplets,
  ShieldAlert, HeartPulse, Store, Hospital, Zap,
  Radiation, Map, type LucideIcon,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  longDesc: string;
  tags: string[];
  icon: LucideIcon;
  github: string;
  /** Public hosted app (Vercel, Netlify, etc.) — omit if not deployed */
  liveUrl?: string;
  featured: boolean;
  highlight?: string;
};

const projects: Project[] = [

  {
    title: "HabitatForge",
    description: "Your Home in Space: HabitatForge",
    longDesc:
      "AI-powered space habitat design platform for Mars, Moon, and Gateway missions. Automates layout generation, validation, and 3D visualization while ensuring NASA compliance, cutting design timelines from months to hours.",
    tags: ["Agentic AI", "LangGraph", "Genetic Algorithms", "3D Visualization", "NASA Compliance", "Constraint Validation", "Predictive Design"],
    icon: Store,
    github: "https://github.com/VanshikaWadhwa17/HabitatForge",
    liveUrl: "https://www.habitatforge.earth/",
    featured: true,
    highlight: "1 Star",
  },
  {
    title: "BugScout AI",
    description: "BugScout AI",
    longDesc:
      "Self-learning, multi-agent LLM system for real-time UX friction detection and automated code fixes. Combines session replay analysis, codebase mapping, retrieval-augmented generation, and human-in-the-loop validation to continuously improve actionable solutions.",
    tags: ["Python", "LLM", "Multi-Agent", "Session Replay Analysis", "Codebase Mapping", "Retrieval-Augmented Generation", "Human-in-the-Loop Validation"],
    icon: Newspaper,
    github: "https://github.com/VanshikaWadhwa17/BugScoutAI",
    liveUrl: "https://bugscoutai.vercel.app",
    featured: true,
  },
  {
    title: "GAN's and ARM for Substitute Item Mining",
    description: "GAN's and ARM for Substitute Item Mining",
    longDesc:
      "Graph- and ARM-based system for interpretable, temporal, and hierarchy-aware substitute recommendations in e‑commerce and retail. Evaluates GNNs, temporal modeling, and rule-based learning for improved prediction and explainability.",
    tags: ["Python", "GNN", "Temporal Modeling", "Association Rule Mining (ARM)",  "E-commerce Analytics", "Rule-Based Learning", "Interpretability"],
    icon: ShoppingCart,
    github: "https://github.com/VanshikaWadhwa17/Graphs-and-ARM-for-Substitute-Item-Mining",
    featured: false,
  },
  {
    title: "Project Gutenberg Search Engine",
    description: "Project Gutenberg Search Engine – Python IR",
    longDesc:
      "Mini search engine for Project Gutenberg books with indexing, three retrieval models (Structured, TF-IDF, BM25), evaluation, and a web interface. Allows users to search books by metadata or full text and compare results across models.",
    tags: ["Python", "Flask", "Information Retrieval", "TF-IDF", "BM25", "Web App", "Data Processing"],
    icon: Bot,
    github: "https://github.com/VanshikaWadhwa17/Project-Gutenberg-VanshikaWadhwa",
    featured: true,
    highlight: "Pinned",
  },
  {
    title: "European Water Quality ML Model",
    description: "ML pipeline on 5M+ records for pollution risk prediction",
    longDesc:
      "Research-grade ML pipeline on 5M+ European environmental records. Spatio-temporal feature engineering, gradient boosting for nitrate/phosphate pollution risk prediction across 4 water body types.",
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Feature Engineering"],
    icon: Droplets,
    github: "https://github.com/VanshikaWadhwa17/SpainWaterAnalysis",
    featured: true,
    highlight: "5M+ records",
  },
  {
    title: "Loan Default Prediction",
    description: "Loan fraud analysis using Ensemble Learning",
    longDesc:
      "End-to-end ML project for binary classification of loan defaults, including feature engineering, model comparison, hyperparameter tuning, threshold optimization, and business-impact evaluation in a single Jupyter notebook.",
    tags: ["Python", "Ensemble Learning", "Feature Engineering", "Model Comparison", "Hyperparameter Tuning", "Threshold Optimization", "Business-Impact Evaluation"],
    icon: ShieldAlert,
    github: "https://github.com/VanshikaWadhwa17/LoanDefaultPrediction",
    featured: false,
  },
  {
    title: "Diabetes Prediction — 250K+ Records",
    description: "EDA → XGBoost: 86% accuracy on BRFSS2015 dataset",
    longDesc:
      "End-to-end statistical + ML research on 250K+ public health records. Hypothesis testing → logistic regression → XGBoost achieving 86% accuracy on BRFSS2015 dataset.",
    tags: ["Python", "XGBoost", "Pandas", "Statistical Testing", "Public Health"],
    icon: HeartPulse,
    github: "https://github.com/VanshikaWadhwa17/Diabetes_Statistical_Model",
    featured: false,
    highlight: "86% accuracy",
  },
  {
    title: "Project Aeroflow — Real-Time Pipeline",
    description: "Kafka → Azure Event Hubs → Databricks → Snowflake live dashboards",
    longDesc:
      "End-to-end real-time airline delay data pipeline: FastAPI producer → Apache Kafka → Azure Event Hubs → Databricks PySpark (Bronze/Silver/Gold) → Snowflake → live Snowsight KPI dashboards.",
    tags: ["Python", "Kafka", "Azure", "Databricks", "Snowflake", "PySpark"],
    icon: PlaneTakeoff,
    github: "https://github.com/VanshikaWadhwa17/US-flight-Delay-Data-Pipeline",
    featured: true,
    highlight: "Multi-layer Medallion",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-white via-[#7A1535]/3 to-white"
    >
      <div className="section-blob w-80 h-80 bg-[#7A1535] top-0 -right-10" />
      <div className="section-blob w-80 h-80 bg-[#6B2080] bottom-20 -left-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E879B8]/12 text-[#c2186b] text-sm font-semibold mb-4">
            <Layers className="w-4 h-4" /> Projects
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
            What I&apos;ve{" "}
            <span className="text-[#E879B8]">
              Built
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            5+ Years of experience spanning AI, data engineering, machine learning, and full-stack development.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="gradient-border glass rounded-2xl p-6 shadow-sm border border-white/80 bg-[#E879B8]/5 flex flex-col gap-4 cursor-default group"
              >
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl bg-[#E879B8] flex items-center justify-center shadow-md shadow-[#E879B8]/30"
                  >
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.highlight && (
                      <span className="px-2 py-0.5 rounded-full bg-white/80 text-xs font-bold text-slate-600 border border-slate-200">
                        {project.highlight}
                      </span>
                    )}
                    {project.featured && (
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3 leading-relaxed">
                    {project.longDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/70 text-slate-600 text-xs font-medium border border-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2.5 py-1 rounded-lg bg-white/70 text-slate-400 text-xs font-medium">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer — live demo + source */}
                <div className="pt-2 border-t border-white/60 flex flex-col gap-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#E879B8] text-white text-sm font-semibold shadow-md shadow-[#E879B8]/25 hover:shadow-[#E879B8]/40 hover:bg-[#e060aa] transition-all"
                    >
                      <Globe className="w-4 h-4 shrink-0" />
                      Live project
                      <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-90" />
                    </a>
                  ) : null}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#E879B8] transition-colors group-hover:gap-1"
                  >
                    <Github className="w-4 h-4 shrink-0" />
                    View on GitHub
                    <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More */}
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 rounded-2xl glass border-2 border-[#E879B8]/35 text-[#c2186b] font-semibold hover:border-[#E879B8]/70 transition-colors"
            >
              {showAll ? "Show Less ↑" : `Show All ${projects.length} Projects ↓`}
            </motion.button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
