import { useState } from 'react';
import { Menu, X, ChevronDown, MapPin, Phone, Mail, Linkedin, Facebook, Twitter, ArrowRight, Check } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import CustomBuildFlow from './components/CustomBuildFlow';
import Services from './components/Services';
import FactoryRescue from './components/FactoryRescue';
import Investment from './components/Investment';
import Warranty from './components/Warranty';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <ProductCategories />
      <CustomBuildFlow />
      <Services />
      <FactoryRescue />
      <Investment />
      <Warranty />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
