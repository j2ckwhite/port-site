"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { value: 40, prefix: "$", suffix: "K+", label: "In ad spend directly managed" },
  { value: 10, prefix: "$", suffix: "K+/mo", label: "Revenue scaled for 3 e-commerce brands" },
  { value: 100, prefix: "$", suffix: "K+", label: "In client ad spend consulted across engagements" },
  { value: 10, suffix: "+", label: "Agency owners and operators mentored" },
];

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(eased * value);
            if (progress < 1) requestAnimationFrame(animate);
            else setDisplay(value);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section
      className="py-20 px-6"
      style={{ borderTop: "1px solid #2e2e35", borderBottom: "1px solid #2e2e35" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px" style={{ background: "#2e2e35" }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-8 group transition-colors duration-300"
              style={{ background: "#0f0f11" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#141416")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#0f0f11")
              }
            >
              <p
                className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] mb-3 tabular-nums"
                style={{ color: "#f2f2f2" }}
              >
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#8a8a8a" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
