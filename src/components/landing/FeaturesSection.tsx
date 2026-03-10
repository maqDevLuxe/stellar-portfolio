import { PieChart, TrendingUp, Layers, Bell, BarChart3, Globe } from "lucide-react";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: PieChart, title: "Portfolio Overview", desc: "Unified view of all your holdings across chains, wallets, and exchanges in real time." },
  { icon: TrendingUp, title: "Profit & Loss Tracking", desc: "Detailed P&L analytics with cost basis calculation and tax-ready reports." },
  { icon: Layers, title: "Multi-Chain Support", desc: "Track assets on Ethereum, Solana, BSC, Polygon, Avalanche, and 20+ chains." },
  { icon: Bell, title: "Smart Alerts", desc: "Custom price alerts, whale movement notifications, and portfolio threshold warnings." },
  { icon: BarChart3, title: "Advanced Charts", desc: "Professional-grade charting with technical indicators and historical analysis." },
  { icon: Globe, title: "DeFi Tracking", desc: "Monitor liquidity positions, farming yields, and lending balances automatically." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-neon-blue font-medium uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Portfolio Tracking <span className="gradient-text">Redefined</span></h2>
          <p className="text-muted-foreground text-lg">Everything you need to manage and grow your crypto portfolio, powered by cutting-edge technology.</p>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.08}>
            <GlassCard className="p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-neon-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
