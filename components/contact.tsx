"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      className="py-32 px-6 relative overflow-hidden"
      style={{ borderTop: "1px solid #2e2e35" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(94,106,210,0.08), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 max-w-12" style={{ background: "#2e2e35" }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#8a8a8a" }}
            >
              Contact
            </span>
          </div>

          <h2
            className="font-semibold tracking-[-0.04em] leading-[0.95] mb-6"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              color: "#f2f2f2",
            }}
          >
            Let&apos;s work.
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:jack@rolemade.com"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200"
              style={{ background: "#5e6ad2", color: "#fff" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#6b77e0")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#5e6ad2")
              }
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              jack@rolemade.com
            </a>

            <a
              href="https://linkedin.com/in/rolemade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200"
              style={{
                background: "transparent",
                color: "#8a8a8a",
                border: "1px solid #2e2e35",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#f2f2f2";
                (e.currentTarget as HTMLElement).style.borderColor = "#4a4a55";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#8a8a8a";
                (e.currentTarget as HTMLElement).style.borderColor = "#2e2e35";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div
        className="max-w-6xl mx-auto mt-24 pt-8 flex items-center justify-between"
        style={{ borderTop: "1px solid #1c1c1f" }}
      >
        <span className="text-xs" style={{ color: "#3a3a45" }}>
          © 2025 Jack White
        </span>
        <span className="text-xs" style={{ color: "#3a3a45" }}>
          RoleMade
        </span>
      </div>
    </section>
  );
}
