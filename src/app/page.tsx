import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardUI from "@/components/DashboardUI";
import ProductHuntBanner from "@/components/ProductHuntBanner";
import FutureOfWorkSection from "@/components/FutureOfWorkSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import AIAssistantSection from "@/components/AIAssistantSection";
import SmoothSalesSection from "@/components/SmoothSalesSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <DashboardUI />
      <ProductHuntBanner />
      <FutureOfWorkSection />
      <GlobalPresenceSection />
      <AIAssistantSection />
      <SmoothSalesSection />
      <Footer />
    </main>
  );
}

