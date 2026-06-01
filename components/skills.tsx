"use client";

import { useEffect, useRef, useState } from "react";
import { useIsTouch } from "@/hooks/use-is-touch";

const skills = [
  { name: "AI Workflow Automation", level: 92 },
  { name: "Paid Media (Meta & TikTok)", level: 88 },
  { name: "Full-Funnel Build", level: 85 },
  { name: "Data Organization Tools", level: 90 },
  { name: "Client Acquisition Systems", level: 87 },
];

const tools = [
  "Claude AI", "N8n", "Zapier",
  "Meta Ads Manager", "Google Ads",
  "GoHighLevel", "ClickUp",
  "Photoshop", "After Effects",
  "IBM Enterprise AI", "Google AI",
];

const certs = [
  { name: "IBM Enterprise AI Deployment", year: "2025" },
  { name: "Google AI Essentials", year: "2024" },
  { name: "University of Michigan: GenAI in Business", year: "2024" },
  { name: "Vanderbilt: From Data to Decisions: AI", year: "2024" },
];

function SkillBar({
  skill,
  index,
  isTouch,
  sectionVisible,
}: {
  skill: { name: string; level: number };
  index: number;
  isTouch: boolean;
  sectionVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const active = isTouch ? sectionVisible : hovered;

  return (
    <div
      className="group relative"
      onMouseEnter={() => !isTouch && setHovered(true)}
      onMouseLeave={() => !isTouch && setHovered(false)}
    >
      <div
        className="relative flex items-center justify-between py-4 px-4 -mx-4 rounded-lg transition-all duration-500"
        style={{
          background: active ? "rgba(255,255,255,0.02)" : "transparent",
          cursor: isTouch ? "default" : "pointer",
        }}
      >
        <div className="relative flex items-center gap-4">
          <div
            className="h-5 w-0.5 rounded-full transition-all duration-500"
            style={{
              background: active ? "#5e6ad2" : "#2e2e35",
              opacity: active ? 1 : 0,
              transform: `scaleY(${active ? 1 : 0.5})`,
            }}
          />
          <span
            className="text-sm font-medium tracking-tight transition-all duration-500"
            style={{
              color: active ? "#f2f2f2" : isTouch ? "#c8c8c8" : "#8a8a8a",
              transform: `translateX(${active || isTouch ? 0 : -20}px)`,
            }}
          >
            {skill.name}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="relative w-20 md:w-24 h-0.5 rounded-full overflow-hidden"
            style={{ background: "#2e2e35" }}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-700"
              style={{
                width: active ? `${skill.level}%` : "0%",
                background: "linear-gradient(to right, #4a56c8, #5e6ad2)",
                transitionDelay: active
                  ? `${isTouch ? index * 80 : 100}ms`
                  : "0ms",
              }}
            />
          </div>

          <div className="relative w-8 overflow-hidden">
            <span
              className="block text-xs font-mono tabular-nums text-right transition-all duration-500"
              style={{
                color: active ? "#f2f2f2" : "transparent",
                transform: `translateY(${active ? 0 : 12}px)`,
              }}
            >
              {skill.level}
            </span>
          </div>
        </div>
      </div>

      {index < skills.length - 1 && (
        <div
          className="mx-4 h-px transition-all duration-300"
          style={{ background: active ? "transparent" : "#1c1c1f" }}
        />
      )}
    </div>
  );
}

export function Skills() {
  const isTouch = useIsTouch();
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isTouch) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSectionVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isTouch]);

  return (
    <section id="skills" className="py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="h-px flex-1 max-w-12" style={{ background: "#2e2e35" }} />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#8a8a8a" }}
          >
            Skills
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Skill bars */}
          <div ref={sectionRef}>
            <h2
              className="text-xl md:text-2xl font-semibold tracking-[-0.03em] mb-8 md:mb-10"
              style={{ color: "#f2f2f2" }}
            >
              Expertise
            </h2>
            <div className="flex flex-col gap-1">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isTouch={isTouch}
                  sectionVisible={sectionVisible}
                />
              ))}
            </div>

            <div
              className="flex items-center gap-3 mt-8 pt-6"
              style={{ borderTop: "1px solid #2e2e35" }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#5e6ad2" }}
              />
              <p className="text-xs tracking-wide" style={{ color: "#8a8a8a" }}>
                {isTouch ? "Scroll to reveal" : "Hover to explore"}
              </p>
            </div>
          </div>

          {/* Tools + Certs */}
          <div className="flex flex-col gap-10 md:gap-12">
            <div id="tools">
              <h3
                className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
                style={{ color: "#8a8a8a" }}
              >
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1.5 rounded-md transition-colors duration-150 active:bg-[#2a2a30]"
                    style={{
                      background: "#1c1c1f",
                      color: "#8a8a8a",
                      border: "1px solid #2e2e35",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
                style={{ color: "#8a8a8a" }}
              >
                Certifications
              </h3>
              <div className="space-y-2">
                {certs.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center justify-between py-3 px-4 rounded-md transition-colors duration-150 active:bg-[#242428]"
                    style={{ background: "#1c1c1f", border: "1px solid #2e2e35" }}
                  >
                    <span className="text-sm leading-snug pr-4" style={{ color: "#c8c8c8" }}>
                      {cert.name}
                    </span>
                    <span
                      className="text-xs font-mono flex-shrink-0"
                      style={{ color: "#8a8a8a" }}
                    >
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
