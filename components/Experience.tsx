"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, TrendingUp, Award, GraduationCap, BookOpen, BadgeCheck } from "lucide-react";

const experiences = [
  {
    role: "Data Scientist",
    company: "IWBI–Syscore Solutions",
    location: "Gurugram, India",
    period: "Jun 2024 – Aug 2025",
    type: "Past",
    dotColor: "bg-[#E879B8]",
    highlights: [
      "Led development of an anomaly detection system on sensor data using statistical thresholding and time-series modeling to reduce false maintenance alerts across smart building portfolios; deployed across 8+ building modules, cutting false-positive operational alerts by 35% and enabling proactive issue resolution before client escalation.",
      "Designed and integrated frontend APIs supporting high-volume certification workflows, improving data exchange reliability and reducing production defects by 30%.",
      "Built reusable UI component library adopted across 5+ applications, reducing duplicate code by 40% and accelerating feature delivery across teams.",
      "Improved frontend performance through optimization of rendering and API interactions, reducing page load times by 28% and improving user experience for global enterprise customers.",
      "Mentored juniors through code reviews, pair programming, and sprint retrospectives to improve engineering throughput and knowledge transfer across delivery cycles.",
      "Redesigned IWBI's Nuxt 3 Website: This redesign not only refreshed the user interface but also improved accessibility, facilitated customer navigation, and aligned with IWBI’s branding standards, enriching the experience for its extensive daily user base.",
      "Microfrontend Migration & Code Optimization: Spearheaded the migration of IWBI's codebase from Nuxt 2 to Nuxt 3, employing a modular, microfrontend architecture to improve scalability. I independently handled the transformation of a core module and separated out a centralized UI-library for reusable components, styles, and design assets.",
      "UI-Library & Modularization: Developed a dedicated UI-library using Tailwind CSS, FormKit, and custom Wind components, packaging it as an npm module to maintain consistency across microfrontends and streamline future redesigns.",
      "Data Management & Custom Solutions: Leveraged AG Grid for robust data table solutions, implemented axios and fetch for efficient data handling, and customized FormKit to enable flexible, user-friendly forms.",
      "Monorepos and Microfrontends: Built a monorepo system for micro-frontends that run independently but integrate seamlessly into the main application, ensuring system resilience—if one module fails, others continue to function—using Nx, Nuxt 3, PNPM workspaces, and Vite Plugin Federation with a shared UI library published as an NPM package.",
      "Worked on agentic AI workflows to streamline certification processes and improve operational efficiency at scale.",
    ],
    tags: [
      "Anomaly Detection",
      "Time Series Modeling",
      "Agentic AI",
      "Microfrontend Architecture",
      "Monorepo (Nx)",
      "Nuxt 3",
      "Vue.js",
      "Data Science",
      "Enterprise Platforms",
    ],
  },
  {
    role: "Associate Data Scientist",
    company: "TransUnion CIBIL",
    location: "Bengaluru, India",
    period: "Jul 2021 – Jun 2024",
    type: "Past",
    dotColor: "bg-[#E879B8]",
    highlights: [
      "Developed end-to-end Python ML pipelines covering feature engineering, model training, threshold optimization, and output monitoring to power credit risk scoring at scale; processed 5M+ financial records with measurable improvements in scoring reliability and pipeline stability.",
      "Developed predictive analytics workflows on large-scale financial datasets using behavioral and transactional signals to improve risk segmentation and support strategic business decision-making.",
      "Built automated SQL and Python data pipelines for data preparation, reporting, and model monitoring, reducing manual analysis effort and accelerating delivery of business insights to stakeholders.",
      "Worked on a production-grade MLaaS platform, enabling scalable deployment of machine learning models for predictive analytics and intelligent decision-making.",
      "Built the OneTru AI Studio—a low-code agent builder allowing analysts to construct workflows, connect MCPs and data sources, and orchestrate ML model inference to reduce dependency on engineering teams for routine predictive tasks; cut time-to-insight for non-technical stakeholders across 4+ product teams.",
      "Developed an AI Engineering superagent capable of automated code generation, UI scaffolding, wireframe creation, and architecture design to accelerate the engineering development cycle; achieved 73% adoption across engineering teams.",
      "Led design and development of the OneTru UI platform using JavaScript, TypeScript, and Vue.js, building scalable frontend architecture integrated with RESTful APIs developed in Node.js, Express.js, and Java-based microservices serving millions of B2B customers.",
      "Led systematic performance optimization through debugging, refactoring, and query tuning within Agile delivery cycles, improving overall system response times by 30% across high-volume financial workflows.",
      "Designed and implemented Google OAuth and third-party SSO integration to streamline user authentication and onboarding across enterprise products; accelerated authentication speed by 70% and improved onboarding conversion for new clients.",
      "Designed and drove end-to-end implementation of Role-Based Access Control (RBAC) across the frontend application to strengthen data security and governance controls; reduced unauthorized access incidents by 50%.",
    ],
    tags: [
      "Credit Risk Scoring",
      "ML Pipelines",
      "Predictive Analytics",
      "MLaaS & AI Workflow Automation",
      "JavaScript / TypeScript / Vue.js",
      "Role-Based Access Control (RBAC)",
      "Performance Optimization",
      "Google OAuth & SSO",
      "Agile Methodologies",
    ],
  },
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    location: "India",
    period: "Jun 2020 – Oct 2020",
    type: "Past",
    dotColor: "bg-[#E879B8]",
    highlights: [
      "Worked as a full stack developer trainee",
      "Responsible for developing reusable, scalable and performance centric UI modules",
      "Hands-on experience in attending and hosting daily scrums and following Agile project Management methodologies",
    ],
    tags: [
      "Full Stack Development",
      "Agile Project Management",
      "UI Development",
      "Performance Optimization",
      "Scalable Systems",
      "MySQL"
    ]
  },
];

const education = [
  {
    degree: "M.Sc. Computing (Artificial Intelligence)",
    institution: "Dublin City University",
    period: "2025 – Present",
    grade: "2:1 Expected",
    icon: GraduationCap,
  },
  {
    degree: "B.Tech Computer Science Engineering",
    institution: "DIT University",
    period: "2016 – 2020",
    grade: "CGPA: 7.5/10",
    icon: BookOpen,
  },
];

const certifications = [
  { name: "Google Generative AI Leader Badge – Google", year: "2026" },
  { name: "Micro Certification: Agentic AI Executive – ServiceNow", year: "2026" },
  { name: "Hugging Face AI Agents Course – Hugging Face", year: "2026" },
  { name: "Deep Agents with LangGraph – LangChain", year: "2026" },
  { name: "Understanding Prompt Engineering", year: "2026" },
  { name: "Introduction to R", year: "2025" },
  { name: "Generative AI: Introduction and Applications by IBM", year: "2025" },
  { name: "Introduction to Artificial Intelligence", year: "2025" },
  { name: "Python Data Structures by University of Michigan", year: "2025" },
  { name: "Getting Started with Python by University of Michigan", year: "2025" },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="section-blob w-96 h-96 bg-[#D4952A] top-0 right-0" />
      <div className="section-blob w-72 h-72 bg-[#6B2080] bottom-0 left-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E879B8]/12 text-[#c2186b] text-sm font-semibold mb-4">
            <Briefcase className="w-4 h-4" /> Experience & Education
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
            My{" "}
            <span className="text-[#E879B8]">
              Journey
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Engineering AI-driven products and modern data infrastructure, powering predictive insights and
            real-time decision-making.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#E879B8]" /> Work Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 timeline-line rounded-full" />

              <div className="flex flex-col gap-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="pl-14 relative"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-3 top-4 w-5 h-5 rounded-full ${exp.dotColor} shadow-md ring-4 ring-white`}
                    />

                    <motion.div
                      whileHover={{ x: 4 }}
                      className="glass rounded-2xl p-6 shadow-sm border border-white/80"
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-slate-800 text-lg">{exp.role}</h4>
                            {exp.type === "Current" && (
                              <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold animate-pulse">
                                LIVE
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                            <span className="flex items-center gap-1 font-semibold text-slate-700">
                              <Briefcase className="w-3.5 h-3.5" />
                              {exp.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex gap-2 text-sm text-slate-600">
                            <span className="text-[#E879B8] mt-0.5 flex-shrink-0">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column – Education & Certs */}
          <div className="flex flex-col gap-6">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#E879B8]" /> Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-2xl p-5 shadow-sm border border-white/80"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#E879B8] flex items-center justify-center mb-3 shadow-sm shadow-[#E879B8]/25">
                      <edu.icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-bold text-slate-800 text-sm">{edu.degree}</p>
                    <p className="text-slate-600 text-sm mt-0.5">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-slate-500">{edu.period}</span>
                      <span
                        className="px-2.5 py-1 rounded-full bg-[#E879B8] text-white text-xs font-bold shadow-sm shadow-[#E879B8]/20"
                      >
                        {edu.grade}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-[#E879B8]" /> Certifications
              </h3>
              <div className="flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="glass rounded-xl p-4 shadow-sm border border-white/80 flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#E879B8] flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#E879B8]/25">
                      <BadgeCheck className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">{cert.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{cert.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
