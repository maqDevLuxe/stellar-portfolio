import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";
import { Coins, ArrowUpRight } from "lucide-react";

const pools = [
  { name: "Ethereum 2.0", symbol: "ETH", apy: "4.2%", tvl: "$32.4B", risk: "Low" },
  { name: "Solana Staking", symbol: "SOL", apy: "7.1%", tvl: "$12.8B", risk: "Medium" },
  { name: "Cosmos Hub", symbol: "ATOM", apy: "18.5%", tvl: "$2.1B", risk: "Medium" },
  { name: "Polkadot", symbol: "DOT", apy: "14.2%", tvl: "$4.6B", risk: "Medium" },
];

const StakingSection = () => (
  <section id="staking" className="section-padding">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <ScrollReveal delay={0.1}>
        <GlassCard className="p-6 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Coins className="w-5 h-5 text-neon-blue" /> Top Staking Pools
            </h3>
          </div>
          <div className="grid grid-cols-4 text-xs text-muted-foreground pb-2 border-b border-border">
            <span>Asset</span><span>APY</span><span>TVL</span><span>Risk</span>
          </div>
          {pools.map((p) => (
            <div key={p.symbol} className="grid grid-cols-4 items-center py-2.5 text-sm group cursor-pointer hover:bg-muted/30 rounded-lg px-1 transition-colors">
              <div>
                <p className="font-medium text-foreground">{p.symbol}</p>
                <p className="text-xs text-muted-foreground">{p.name}</p>
              </div>
              <span className="text-neon-green font-semibold">{p.apy}</span>
              <span className="text-muted-foreground">{p.tvl}</span>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{p.risk}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </GlassCard>
      </ScrollReveal>

      <ScrollReveal>
        <div className="space-y-6">
          <p className="text-sm text-neon-blue font-medium uppercase tracking-widest">Earn Yield</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Staking & <span className="gradient-text">Yield Farming</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Discover the best staking opportunities across protocols. Compare APYs, TVL, and risk levels to maximize your passive income.
          </p>
          <button className="flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple font-semibold text-background hover:opacity-90 transition-opacity">
            Explore Staking <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default StakingSection;
