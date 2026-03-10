import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const articles = [
  { tag: "Analysis", title: "Bitcoin's Path to $100K: On-Chain Signals Point Bullish", date: "Mar 7, 2026", read: "5 min" },
  { tag: "DeFi", title: "The Rise of Liquid Staking Derivatives in 2026", date: "Mar 5, 2026", read: "8 min" },
  { tag: "Regulation", title: "How MiCA is Reshaping European Crypto Markets", date: "Mar 3, 2026", read: "6 min" },
];

const InsightsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-neon-blue font-medium uppercase tracking-widest mb-3">Insights</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Crypto Market <span className="gradient-text">Insights</span></h2>
          <p className="text-muted-foreground text-lg">Expert analysis and research to keep you informed on market trends.</p>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <ScrollReveal key={a.title} delay={i * 0.1}>
            <GlassCard className="p-6 h-full flex flex-col group cursor-pointer">
              <span className="text-xs text-neon-purple font-medium mb-3">{a.tag}</span>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-neon-blue transition-colors flex-1">{a.title}</h3>
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                <span>{a.date} · {a.read} read</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection;
