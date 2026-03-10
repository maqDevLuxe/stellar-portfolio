import { useEffect, useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

const stats = [
  { value: 2400000000, label: "24h Trading Volume", prefix: "$", suffix: "B", divisor: 1000000000 },
  { value: 850000, label: "Active Users", prefix: "", suffix: "K+", divisor: 1000 },
  { value: 12000, label: "Supported Assets", prefix: "", suffix: "+", divisor: 1 },
  { value: 99, label: "Uptime", prefix: "", suffix: ".99%", divisor: 1 },
];

const Counter = ({ value, label, prefix, suffix, divisor }: typeof stats[0]) => {
  const { count, ref } = useCountUp(Math.floor(value / divisor));
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold gradient-text">
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const CountersSection = () => (
  <section className="section-padding border-y border-border">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => <Counter key={s.label} {...s} />)}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CountersSection;
