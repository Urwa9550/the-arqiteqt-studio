import HeroSlider from '../components/HeroSlider.tsx'
import HowWeDoIt from '../components/HowWeDoIt.tsx'
import WhatWeDo from '../components/WhatWeDo.tsx'
import OurWork from '../components/OurWork.tsx'
import AboutUs from '../components/AboutUs.tsx'

export default function Home() {
  return (
    <main>
      <section id="home">
        <HeroSlider />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="work">
        <OurWork />
      </section>
      <section id="services">
        <WhatWeDo />
      </section>
      <section id="approach">
        <HowWeDoIt />
      </section>
    </main>
  )
}
