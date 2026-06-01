"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIsTouch } from "@/hooks/use-is-touch";

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouch();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (isTouch) return;
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      glowRef.current.style.background = `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(94, 106, 210, 0.07), transparent 50%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isTouch]);

  const fade = (delay: number) =>
    prefersReduced
      ? { opacity: 1, y: 0 }
      : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay } };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6">
      {/* Cursor glow — desktop only */}
      {!isTouch && (
        <div
          ref={glowRef}
          className="pointer-events-none fixed inset-0 z-10 transition-all duration-300"
        />
      )}

      {/* Background radial */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(94,106,210,0.12), transparent)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#f2f2f2 1px, transparent 1px), linear-gradient(to right, #f2f2f2 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-20 max-w-6xl mx-auto w-full pt-20 pb-16">
        {/* Badge */}
        <motion.div
          {...(!prefersReduced && { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } })}
          className="inline-flex items-center gap-2 mb-8 md:mb-10"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full"
            style={{
              background: "rgba(94, 106, 210, 0.1)",
              border: "1px solid rgba(94, 106, 210, 0.25)",
              color: "#8b96f0",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#5e6ad2] animate-pulse" />
            Available for new roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...(!prefersReduced && { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay: 0.1 } })}
          className="font-semibold tracking-[-0.04em] leading-[0.95] mb-5 md:mb-6"
          style={{
            fontSize: "clamp(3rem, 11vw, 8rem)",
            color: "#f2f2f2",
          }}
        >
          Jack White.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...(!prefersReduced && { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay: 0.2 } })}
          className="text-lg md:text-2xl font-light tracking-[-0.02em] mb-7 md:mb-8 max-w-2xl leading-relaxed"
          style={{ color: "#8a8a8a" }}
        >
          AI automation builder and growth operator.{" "}
          <span style={{ color: "#f2f2f2" }}>
            I build tools that eliminate manual work
          </span>{" "}
          and scale revenue for businesses that can&apos;t afford to stay slow.
        </motion.p>

        {/* Meta row */}
        <motion.div
          {...(!prefersReduced && { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay: 0.3 } })}
          className="flex flex-wrap items-center gap-4 md:gap-6 mb-10 md:mb-12"
        >
          {["Chicago, IL", "Founder, RoleMade", "19 years old"].map((label, i) => (
            <span
              key={label}
              className="flex items-center gap-2 text-sm meta-pulse"
              style={{
                color: "#8a8a8a",
                animationDelay: `${i * 0.6}s`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full meta-dot-pulse"
                style={{ animationDelay: `${i * 0.6}s` }}
              />
              {label}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...(!prefersReduced && { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay: 0.4 } })}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <a
            href="mailto:jack@rolemade.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium transition-all duration-200 active:scale-95 w-full sm:w-auto justify-center sm:justify-start"
            style={{ background: "#5e6ad2", color: "#fff" }}
          >
            Get in touch
          </a>
          <a
            href="https://linkedin.com/in/rolemade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium transition-all duration-200 active:scale-95 w-full sm:w-auto justify-center sm:justify-start"
            style={{
              background: "transparent",
              color: "#8a8a8a",
              border: "1px solid #2e2e35",
            }}
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — hide on short screens */}
      <motion.div
        {...(!prefersReduced && { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.2, duration: 0.6 } })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#3a3a45" }}>
          scroll
        </span>
        <div
          className="w-px h-8 animate-pulse"
          style={{ background: "linear-gradient(to bottom, #2e2e35, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
