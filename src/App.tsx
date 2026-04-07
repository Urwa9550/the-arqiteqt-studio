import Header from './components/Header.tsx'
import HeroSlider from './components/HeroSlider.tsx'
import HowWeDoIt from './components/HowWeDoIt.tsx'
import Services from './components/WhatWeDo.tsx'
import OurWork from './components/OurWork.tsx'
import AboutUs from './components/AboutUs.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <HeroSlider />
        </section>
        <section id="approach">
          <HowWeDoIt />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="work">
          <OurWork />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App