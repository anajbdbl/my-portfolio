// app/page.tsx
import Hero from '@/components/Hero';
import WorkSection from '@/components/sections/WorkSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
// import EditorialSection from '@/components/sections/EditorialSection';
import AnimatedReveal from '@/components/AnimatedReveal';

export default function HomePage() {
  return (
    <>
      <AnimatedReveal>
        <Hero />
      </AnimatedReveal>

      <section id="work">
        <AnimatedReveal>
          <WorkSection />
        </AnimatedReveal>
      </section>

      <section id="about">
        <AnimatedReveal>
          <AboutSection />
        </AnimatedReveal>
      </section>

      <section id="contact">
        <AnimatedReveal>
          <ContactSection />
        </AnimatedReveal>
      </section>
    </>
  );
}