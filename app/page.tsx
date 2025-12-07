import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LiveCounter } from "@/components/live-counter"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FloatingActionButton } from "@/components/floating-action-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LiveCounter />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
      <FloatingActionButton />
    </main>
  )
}
