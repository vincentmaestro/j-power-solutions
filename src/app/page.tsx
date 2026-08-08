import Hero from '@/app/components/home/hero';
import AudienceSplit from '@/app/components/home/audience-split';
import Capabilities from '@/app/components/home/capabilities';
import Metrics from '@/app/components/home/metrics';
import Process from '@/app/components/home/process';
import Projects from '@/app/components/home/projects';
import CTA from '@/app/components/home/cta-section';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AudienceSplit />
      <Capabilities />
      <Metrics />
      <Process />
      <Projects />
      <CTA />
    </main>
  );
}
