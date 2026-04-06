"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white py-12 px-4 sm:px-6">
      {/* Accent top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#E879B8]/80" />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & credit */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#E879B8] flex items-center justify-center text-sm font-bold text-white shadow-md shadow-[#E879B8]/30">
                VW
              </div>
              <span className="font-bold text-lg text-[#E879B8]">
                Vanshika Wadhwa
              </span>
            </div>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              Built with <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400 inline" /> &
              Next.js · Dublin, Ireland 🇮🇪
            </p>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6 text-sm text-slate-400">
            {["#home", "#about", "#skills", "#experience", "#projects", "#contact"].map(
              (href) => (
                <a
                  key={href}
                  href={href}
                  className="hover:text-white transition-colors capitalize"
                >
                  {href.slice(1)}
                </a>
              )
            )}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/VanshikaWadhwa17", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vanshika-wadhwa/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:vanshikawadhwa1704@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Vanshika Wadhwa. All rights reserved.</p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/10"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
