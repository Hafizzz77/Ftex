import { Facebook, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">F-TEX Industries</h3>
              <p className="text-gray-400 text-sm">Industrial machinery solutions for textile, food, paper, and printing industries.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#turnkey" className="text-gray-400 hover:text-white transition-colors">Turnkey Solutions</a></li>
                <li><a href="#investment" className="text-gray-400 hover:text-white transition-colors">Investments</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex gap-2">
                  <Phone size={16} className="flex-shrink-0 mt-0.5" />
                  <a href="tel:+924231234567" className="hover:text-white transition-colors">+92-42-3123-4567</a>
                </li>
                <li className="flex gap-2">
                  <Mail size={16} className="flex-shrink-0 mt-0.5" />
                  <a href="mailto:info@ftextech.com" className="hover:text-white transition-colors">info@ftextech.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {currentYear} F-TEX Industries. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
