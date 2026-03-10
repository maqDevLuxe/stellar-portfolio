import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";

const metrics = [
  { name: "Bitcoin", symbol: "BTC", price: "$67,842.50", change: "+3.24%", positive: true, mcap: "$1.33T" },
  { name: "Ethereum", symbol: "ETH", price: "$3,521.18", change: "+1.87%", positive: true, mcap: "$423B" },
  { name: "Solana", symbol: "SOL", price: "$178.42", change: "-0.94%", positive: false, mcap: "$82B" },
  { name: "BNB", symbol: "BNB", price: "$612.30", change: "+2.15%", positive: true, mcap: "$94B" },
  { name: "XRP", symbol: "XRP", price: "$0.6284", change: "-1.32%", positive: false, mcap: "$34B" },
  { name: "Cardano", symbol: "ADA", price: "$0.4821", change: "+5.67%", positive: true, mcap: "$17B" },
];

const MiniChart = ({ positive }: { positive: boolean }) => (
  <svg viewBox="0 0 80 30" className="w-20 h-8">
    <polyline
      fill="none"
      stroke={positive ? "hsl(145,80%,50%)" : "hsl(0,85%,55%)"}
      strokeWidth="2"
      points={
        positive
          ? "0,25 10,22 20,18 30,20 40,15 50,12 60,14 70,8 80,5"
          : "0,5 10,8 20,12 30,10 40,15 50,18 60,16 70,22 80,25"
      }
    />
  </svg>
);

const MarketMetrics = () => (
  <section id="markets" className="section-padding">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-neon-blue font-medium uppercase tracking-widest mb-3">Live Data</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Real-time <span className="gradient-text">Market Metrics</span></h2>
          <p className="text-muted-foreground text-lg">Stay ahead with live price feeds, market cap data, and trend analysis across thousands of assets.</p>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {metrics.map((m, i) => (
          <ScrollReveal key={m.symbol} delay={i * 0.06}>
            <GlassCard className="p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.symbol}</p>
                <p className="text-lg font-bold text-foreground mt-1">{m.price}</p>
                <p className="text-xs text-muted-foreground">MCap {m.mcap}</p>
              </div>
              <div className="text-right flex flex-col items-end gap-1">
                <MiniChart positive={m.positive} />
                <span className={`text-sm font-semibold ${m.positive ? "text-neon-green" : "text-neon-red"}`}>
                  {m.change}
                </span>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default MarketMetrics;
