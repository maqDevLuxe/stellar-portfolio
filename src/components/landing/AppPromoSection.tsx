import ScrollReveal from "./ScrollReveal";
import appPromo from "@/assets/app-promo.jpg";

const AppPromoSection = () => (
  <section className="section-padding">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10" />
          <img src={appPromo} alt="CryptoVault App" className="w-full rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
              Available on <span className="gradient-text">All Devices</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">Desktop, tablet, and mobile — your portfolio is always at your fingertips.</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AppPromoSection;
