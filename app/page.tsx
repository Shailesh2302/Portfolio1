import AnimatedLine from "@/components/AnimatedLine";
import Container from "@/components/Container";
import HeroSection from "@/components/herosection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="gap-5">
      <Container>
        <HeroSection />
        <AnimatedLine />
        <Skills />
      </Container>
    </div>
  );
}
