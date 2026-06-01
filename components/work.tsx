"use client";

import { motion } from "framer-motion";

interface Project {
  tag: string;
  title: string;
  description: string;
  results: string[];
  tools: string[];
}

const projects: Project[] = [
  {
    tag: "AI Automation",
    title: "CCS International — Executive Tooling",
    description:
      "Built 3 internal automation tools for the COO of a Chicago-based enterprise firm. Each tool accepts drag-and-drop data files and outputs clean, structured reports that previously required hours of manual Excel work.",
    results: [
      "160+ hours of manual work eliminated annually",
      "~$20K/year recovered in executive time",
      "All 3 tools in active daily use",
    ],
    tools: ["Claude AI", "Python", "HTML/CSS"],
  },
  {
    tag: "Productized Service",
    title: "RoleMade — AI Tooling for Operators",
    description:
      "Built a repeatable system for deploying custom AI workflow tools to professional services clients. Each tool is scoped, built, and handed off — no ongoing technical dependency, no learning curve. Clients run it themselves.",
    results: [
      "2–3 hours eliminated per monthly workflow run, per client",
      "Deployed across consulting, operations, and services teams",
      "Zero technical knowledge required — drag, drop, done",
    ],
    tools: ["N8n", "Zapier", "Claude AI", "HTML/CSS"],
  },
  {
    tag: "Paid Growth",
    title: "E-Commerce Brand Scaling",
    description:
      "Took full ownership of paid media, ad creative production, and organic content direction for three fashion e-commerce brands. Built and managed the full funnel — from first impression to purchase — independently.",
    results: [
      "3 brands scaled from <$500/mo to $10K+/mo",
      "All 3 scaled in under 60 days",
      "3–6x return on ad spend consistently",
    ],
    tools: ["Meta Ads", "TikTok Ads", "GoHighLevel"],
  },
  {
    tag: "Strategy",
    title: "Agency & Operator Consulting",
    description:
      "Advised 10+ agency owners and freelancers on client acquisition systems, offer design, and scaling operations. Built custom funnels — paid traffic through CRM and automated follow-up — for e-commerce operators.",
    results: [
      "10+ agency owners and operators mentored",
      "$100K+ in client ad spend consulted on",
      "0 → $5K–$10K/mo for consulted e-commerce clients",
    ],
    tools: ["GoHighLevel", "ClickUp", "Meta Ads"],
  },
];

const tagColors: Record<string, string> = {
  "AI Automation": "rgba(94, 106, 210, 0.12)",
  "Paid Growth": "rgba(52, 199, 89, 0.1)",
  Strategy: "rgba(255, 159, 10, 0.1)",
};

const tagTextColors: Record<string, string> = {
  "AI Automation": "#8b96f0",
  "Paid Growth": "#4cd964",
  Strategy: "#ffa940",
};

export function Work() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 max-w-12" style={{ background: "#2e2e35" }} />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#8a8a8a" }}
          >
            Work
          </span>
        </div>

        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]"
            style={{ color: "#f2f2f2" }}
          >
            What I build
          </h2>
          <p className="mt-3 text-base" style={{ color: "#8a8a8a" }}>
            AI tools that eliminate manual work. Growth systems that scale revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "#2e2e35" }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col p-6 md:p-8 transition-colors duration-300 group active:bg-[#141416]"
              style={{ background: "#0f0f11" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#141416")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#0f0f11")
              }
            >
              {/* Tag */}
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full w-fit mb-5"
                style={{
                  background: tagColors[project.tag],
                  color: tagTextColors[project.tag],
                  border: `1px solid ${tagTextColors[project.tag]}30`,
                }}
              >
                {project.tag}
              </span>

              {/* Title */}
              <h3
                className="text-base font-semibold tracking-[-0.02em] mb-3"
                style={{ color: "#f2f2f2" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#8a8a8a" }}>
                {project.description}
              </p>

              {/* Results */}
              <div className="space-y-2 mb-6">
                {project.results.map((result, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "#5e6ad2" }}
                    />
                    <span className="text-sm" style={{ color: "#c8c8c8" }}>
                      {result}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 pt-6" style={{ borderTop: "1px solid #2e2e35" }}>
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-md"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
