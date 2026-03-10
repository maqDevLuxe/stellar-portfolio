import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const coins = [
  { symbol: "₿", gradient: "from-orange-400 to-orange-600", size: "w-16 h-16 text-xl", pos: "top-24 left-[8%]", dur: 5 },
  { symbol: "Ξ", gradient: "from-blue-400 to-indigo-600", size: "w-12 h-12 text-base", pos: "top-36 right-[12%]", dur: 6 },
  { symbol: "◆", gradient: "from-purple-400 to-fuchsia-600", size: "w-10 h-10 text-sm", pos: "bottom-40 left-[18%]", dur: 7 },
  { symbol: "S", gradient: "from-green-400 to-emerald-600", size: "w-14 h-14 text-lg", pos: "top-56 right-[6%]", dur: 4.5 },
  { symbol: "●", gradient: "from-yellow-400 to-amber-500", size: "w-11 h-11 text-sm", pos: "bottom-24 right-[22%]", dur: 5.5 },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_80%_60%/0.12)_0%,transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(195_100%_50%/0.08)_0%,transparent_50%)]" />

    {coins.map((c, i) => (
      <motion.div
        key={i}
        className={`absolute ${c.pos} ${c.size} rounded-full bg-gradient-to-br ${c.gradient} flex items-center justify-center font-bold opacity-50 shadow-lg hidden md:flex`}
        animate={{ y: [-12, 12, -12], rotate: [0, 5, -5, 0] }}
        transition={{ duration: c.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
      >
        {c.symbol}
      </motion.div>
    ))}

    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <ScrollReveal>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-neon-blue font-medium">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            Live Portfolio Tracking
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-foreground">
            Your Crypto
            <span className="block gradient-text">Portfolio Hub</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Track, analyze, and optimize your entire crypto portfolio across exchanges and wallets with AI-powered insights and real-time market data.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple font-semibold text-background hover:opacity-90 transition-opacity glow-blue">
              Launch App <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-lg glass-card text-foreground font-semibold hover:bg-muted/50 transition-colors">
              <Play className="w-4 h-4" /> Watch Demo
            </button>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-3xl" />
          <img src={heroImage} alt="CryptoVault Dashboard" className="relative rounded-2xl border border-border shadow-2xl w-full" />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;
