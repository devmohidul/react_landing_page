import Company from "./components/Company";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";

export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Company />
      <Services />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer />
    </div>
  );
}
