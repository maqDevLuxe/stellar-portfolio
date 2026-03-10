import { Wallet, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap"],
  Resources: ["Documentation", "API", "Blog", "Community"],
  Company: ["About", "Careers", "Press", "Contact"],
  Legal: ["Terms", "Privacy", "Cookies", "Compliance"],
};

const FooterSection = () => (
  <footer className="border-t border-border">
    {/* CTA */}
    <div className="section-padding">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Take <span className="gradient-text">Control?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Connect your wallet and start tracking your portfolio in under 60 seconds. No sign-up required.
            </p>
            <button className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple font-semibold text-background hover:opacity-90 transition-opacity glow-blue text-lg">
              <Wallet className="w-5 h-5" /> Connect Wallet <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>

    {/* Footer links */}
    <div className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <span className="text-xs font-bold text-background">C3</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground">CryptoVault</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The most advanced Web3 portfolio dashboard for serious crypto investors.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 CryptoVault. All rights reserved.</p>
          <div className="flex gap-6">
            {["Twitter", "Discord", "Telegram", "GitHub"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
