import ScrollReveal from "./ScrollReveal";

const exchanges = [
  "Binance", "Coinbase", "Kraken", "KuCoin", "OKX", "Bybit",
  "MetaMask", "Phantom", "Ledger", "Trust Wallet",
];

const ExchangesSection = () => (
  <section className="section-padding border-t border-border">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
          Integrated with 50+ Exchanges & Wallets
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {exchanges.map((name) => (
            <div
              key={name}
              className="glass-card px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-neon-blue/30 transition-colors cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ExchangesSection;
