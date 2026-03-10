import { Shield, Lock, Eye, Fingerprint, Server, KeyRound } from "lucide-react";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Shield, title: "Military-Grade Encryption", desc: "AES-256 encryption protects all your data at rest and in transit." },
  { icon: Lock, title: "Non-Custodial", desc: "We never hold your private keys. Your assets remain under your full control." },
  { icon: Eye, title: "Read-Only Access", desc: "API connections use read-only permissions — we can't move your funds." },
  { icon: Fingerprint, title: "Biometric Auth", desc: "Face ID and fingerprint authentication for secure mobile access." },
  { icon: Server, title: "SOC 2 Compliant", desc: "Enterprise-grade infrastructure audited by leading security firms." },
  { icon: KeyRound, title: "2FA Protection", desc: "Multi-factor authentication with hardware key and TOTP support." },
];

const SecuritySection = () => (
  <section id="security" className="section-padding">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-neon-blue font-medium uppercase tracking-widest mb-3">Security</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Bank-Grade <span className="gradient-text">Security</span></h2>
          <p className="text-muted-foreground text-lg">Your security is our top priority. Multiple layers of protection keep your data safe.</p>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.07}>
            <GlassCard className="p-6 h-full gradient-border">
              <f.icon className="w-8 h-8 text-neon-purple mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;
