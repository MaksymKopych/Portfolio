import Contact from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";
export default function Home() {
  return (
    <>
      <section className={`section container`}>
        <Hero />
        <Skills />
        <Portfolio />

        <Contact />
      </section>
      <Footer />
    </>
  );
}
