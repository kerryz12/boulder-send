import {
  HomePageNavbar,
  HeroSection,
  Features,
  Testimonials,
  CallToAction,
  Footer,
} from "../components/index.ts";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <HomePageNavbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
