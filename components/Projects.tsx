"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink, Github, Star, Layers,
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
  color: string;
  gradient: string;
  github: string;
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
    color: "from-[#D4952A] to-[#6B2080]",
    gradient: "from-[#D4952A]/5 to-[#6B2080]/5",
    github: "https://github.com/VanshikaWadhwa17/HabitatForge",
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
    color: "from-[#7A1535] to-[#C57BB8]",
    gradient: "from-[#7A1535]/5 to-[#C57BB8]/5",
    github: "https://github.com/VanshikaWadhwa17/BugScoutAI",
    featured: true,
  },
  {
    title: "GAN's and ARM for Substitute Item Mining",
    description: "GAN's and ARM for Substitute Item Mining",
    longDesc:
      "Graph- and ARM-based system for interpretable, temporal, and hierarchy-aware substitute recommendations in e‑commerce and retail. Evaluates GNNs, temporal modeling, and rule-based learning for improved prediction and explainability.",
    tags: ["Python", "GNN", "Temporal Modeling", "Association Rule Mining (ARM)",  "E-commerce Analytics", "Rule-Based Learning", "Interpretability"],
    icon: ShoppingCart,
    color: "from-[#D4952A] to-[#7A1535]",
    gradient: "from-[#D4952A]/5 to-[#7A1535]/5",
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
    color: "from-[#6B2080] to-[#C57BB8]",
    gradient: "from-[#6B2080]/5 to-[#C57BB8]/5",
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
    color: "from-[#6B2080] to-[#D4952A]",
    gradient: "from-[#6B2080]/5 to-[#D4952A]/5",
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
    color: "from-[#7A1535] to-[#6B2080]",
    gradient: "from-[#7A1535]/5 to-[#6B2080]/5",
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
    color: "from-[#6B2080] to-[#7A1535]",
    gradient: "from-[#6B2080]/5 to-[#7A1535]/5",
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
    color: "from-[#D4952A] to-[#C57BB8]",
    gradient: "from-[#D4952A]/5 to-[#C57BB8]/5",
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A1535]/10 text-[#7A1535] text-sm font-semibold mb-4">
            <Layers className="w-4 h-4" /> Projects
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
            What I&apos;ve{" "}
            <span className="bg-gradient-to-r from-[#7A1535] to-[#6B2080] bg-clip-text text-transparent">
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
                className={`gradient-border glass rounded-2xl p-6 shadow-sm border border-white/80 bg-gradient-to-br ${project.gradient} flex flex-col gap-4 cursor-default group`}
              >
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-md`}
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

                {/* Footer */}
                <div className="pt-2 border-t border-white/60">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#6B2080] transition-colors group-hover:gap-3"
                  >
                    <Github className="w-4 h-4" />
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
              className="px-8 py-3.5 rounded-2xl glass border-2 border-[#6B2080]/30 text-[#6B2080] font-semibold hover:border-[#6B2080]/60 transition-colors"
            >
              {showAll ? "Show Less ↑" : `Show All ${projects.length} Projects ↓`}
            </motion.button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
