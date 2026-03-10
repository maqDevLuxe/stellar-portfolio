import { Brain, Zap, Target, TrendingUp } from "lucide-react";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const signals = [
  { pair: "BTC/USDT", action: "Long", confidence: 94, icon: TrendingUp },
  { pair: "ETH/USDT", action: "Long", confidence: 87, icon: TrendingUp },
  { pair: "SOL/USDT", action: "Short", confidence: 78, icon: TrendingUp },
];

const AISignalsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <ScrollReveal>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs text-neon-purple font-medium">
            <Brain className="w-3 h-3" /> AI-Powered
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            AI Trading <span className="gradient-text">Signals</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our machine learning models analyze on-chain data, social sentiment, and technical indicators to deliver high-confidence trading signals in real time.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: Zap, label: "Real-time Analysis" },
              { icon: Target, label: "94% Accuracy Rate" },
              { icon: Brain, label: "ML-Powered Models" },
              { icon: TrendingUp, label: "Multi-timeframe" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon className="w-4 h-4 text-neon-blue" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <GlassCard className="p-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-foreground">Live Signals</h3>
            <span className="flex items-center gap-1.5 text-xs text-neon-green">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" /> Active
            </span>
          </div>
          {signals.map((s) => (
            <div key={s.pair} className="flex items-center justify-between p-3 rounded-lg bg-muted/40">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-neon-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{s.pair}</p>
                  <p className={`text-xs ${s.action === "Long" ? "text-neon-green" : "text-neon-red"}`}>{s.action}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">{s.confidence}%</p>
                <p className="text-xs text-muted-foreground">confidence</p>
              </div>
            </div>
          ))}
        </GlassCard>
      </ScrollReveal>
    </div>
  </section>
);

export default AISignalsSection;
