import Contact from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
export default function Home() {
  return (
    <>
      <section className={`section container`}>
        <Hero />
        <Portfolio />
        <Contact />
      </section>
      <Footer />
    </>
  );
}
