import { Vote, Users, Scale, CheckCircle2 } from "lucide-react";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const proposals = [
  { id: "CVP-042", title: "Reduce platform fees by 15%", status: "Active", votes: "1.2M", pct: 78 },
  { id: "CVP-041", title: "Add Arbitrum chain support", status: "Passed", votes: "890K", pct: 92 },
  { id: "CVP-040", title: "Launch mobile staking feature", status: "Passed", votes: "1.5M", pct: 85 },
];

const GovernanceSection = () => (
  <section id="governance" className="section-padding">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <ScrollReveal>
        <div className="space-y-6">
          <p className="text-sm text-neon-blue font-medium uppercase tracking-widest">Governance</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Decentralized <span className="gradient-text">Governance</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            CryptoVault is governed by its community. Hold CVT tokens to vote on protocol upgrades, fee structures, and new feature proposals.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { icon: Vote, label: "On-chain Voting" },
              { icon: Users, label: "Community-Led" },
              { icon: Scale, label: "Transparent" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-6 h-6 text-neon-purple mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <GlassCard className="p-6 space-y-4">
          <h3 className="font-semibold text-foreground">Recent Proposals</h3>
          {proposals.map((p) => (
            <div key={p.id} className="p-3 rounded-lg bg-muted/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{p.id}</span>
                <span className={`text-xs font-medium flex items-center gap-1 ${p.status === "Active" ? "text-neon-blue" : "text-neon-green"}`}>
                  {p.status === "Passed" && <CheckCircle2 className="w-3 h-3" />}
                  {p.status}
                </span>
              </div>
              <p className="text-sm font-medium text-foreground">{p.title}</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" style={{ width: `${p.pct}%` }} />
                </div>
                <span className="text-xs text-muted-foreground">{p.votes} votes</span>
              </div>
            </div>
          ))}
        </GlassCard>
      </ScrollReveal>
    </div>
  </section>
);

export default GovernanceSection;
