"use client";

import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15, 15, 17, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #2e2e35" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span
          className="text-sm font-medium tracking-tight"
          style={{ color: "#f2f2f2" }}
        >
          Jack White
        </span>

        <nav className="hidden md:flex items-center gap-8">
          {["Work", "Tools", "Skills"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-colors duration-200"
              style={{ color: "#8a8a8a" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#f2f2f2")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#8a8a8a")
              }
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="mailto:jack@rolemade.com"
          className="text-sm px-4 py-1.5 rounded-md font-medium transition-all duration-200"
          style={{
            background: "rgba(94, 106, 210, 0.15)",
            color: "#8b96f0",
            border: "1px solid rgba(94, 106, 210, 0.3)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background =
              "rgba(94, 106, 210, 0.25)";
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(94, 106, 210, 0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background =
              "rgba(94, 106, 210, 0.15)";
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(94, 106, 210, 0.3)";
          }}
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
