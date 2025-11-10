import { useEffect } from "react";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

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
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
