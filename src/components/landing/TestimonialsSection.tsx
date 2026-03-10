import { Star } from "lucide-react";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Alex Chen",
    role: "DeFi Trader",
    text: "CryptoVault completely changed how I manage my portfolio. The AI signals alone have paid for themselves 100x over.",
    stars: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Institutional Investor",
    text: "The multi-chain tracking and tax reporting features save our team dozens of hours every quarter. Best-in-class tool.",
    stars: 5,
  },
  {
    name: "Raj Patel",
    role: "Crypto Fund Manager",
    text: "We evaluated 15 portfolio trackers before choosing CryptoVault. The real-time data accuracy and security are unmatched.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-neon-blue font-medium uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Trusted by <span className="gradient-text">Traders</span></h2>
          <p className="text-muted-foreground text-lg">Join thousands of traders and investors who rely on CryptoVault daily.</p>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <GlassCard className="p-6 h-full flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-neon-blue text-neon-blue" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-sm font-bold text-background">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
