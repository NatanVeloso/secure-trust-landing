import { useEffect } from "react";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
useEffect(() => {
  const handleAnchorClick = (e: Event) => {
    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute("href");
    
    if (href && href.startsWith("#") && href !== "#") {
      e.preventDefault();
      const element = document.querySelector(href);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", handleAnchorClick);
  });

  return () => {
    links.forEach((link) => {
      link.removeEventListener("click", handleAnchorClick);
    });
  };
}, []);

  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
