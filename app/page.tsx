import AnimatedLine from "@/components/AnimatedLine";
import HorizontalEducationTimeline from "@/components/careerTimeline";
import Container from "@/components/Container";
import HeroSection from "@/components/herosection";
import Project from "@/components/projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div 
      className="min-h-screen gap-5"
      style={{
        background: `linear-gradient(135deg, #191923 0%, #242438 50%, #191923 100%)`
      }}
    >
      <HeroSection />
      <AnimatedLine />
      <Skills />
      <AnimatedLine />
      <HorizontalEducationTimeline />
      <AnimatedLine />
      <Project />
    </div>
  );
}