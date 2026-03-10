import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ExchangesSection from "@/components/landing/ExchangesSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AISignalsSection from "@/components/landing/AISignalsSection";
import MarketMetrics from "@/components/landing/MarketMetrics";
import SecuritySection from "@/components/landing/SecuritySection";
import StakingSection from "@/components/landing/StakingSection";
import AppPromoSection from "@/components/landing/AppPromoSection";
import CountersSection from "@/components/landing/CountersSection";
import InsightsSection from "@/components/landing/InsightsSection";
import GovernanceSection from "@/components/landing/GovernanceSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <ExchangesSection />
    <FeaturesSection />
    <AISignalsSection />
    <MarketMetrics />
    <SecuritySection />
    <StakingSection />
    <AppPromoSection />
    <CountersSection />
    <InsightsSection />
    <GovernanceSection />
    <TestimonialsSection />
    <FooterSection />
  </div>
);

export default Index;
