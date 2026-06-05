import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Insights from "./components/Insights/Insights";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import TrustSection from "./components/TrustSection/TrustSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TrustSection/>
      <Services />
      <Work/>
      <Insights />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
