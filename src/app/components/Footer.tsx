import { Link } from 'react-router-dom';
import { Package, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
      src="/logo.png"
      alt="Rundren Packaging Solutions"
      className="h-24 md:h-28 w-auto object-contain"
    />
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6" />
              </div> */}
              <div>
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  RUDREN SOLUTIONS LLP
                </h3>
                <p className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Packaging Solutions
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Leading provider of premium packaging machinery and solutions for industries worldwide.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/company" className="text-gray-400 hover:text-white transition-colors">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Products
            </h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>
                <Link to="/products?tab=itipack" className="text-gray-400 hover:text-white transition-colors">
                  Strapping Machines
                </Link>
              </li>
              <li>
                <Link to="/products?tab=itipack" className="text-gray-400 hover:text-white transition-colors">
                  Carton Sealing
                </Link>
              </li>
              <li>
                <Link to="/products?tab=itipack" className="text-gray-400 hover:text-white transition-colors">
                  Stretch Wrapping
                </Link>
              </li>
              <li>
                <Link to="/products?tab=atlanta" className="text-gray-400 hover:text-white transition-colors">
                  Pallet Wrapping
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Industrial Park, Business District, Mumbai - 400001, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@broyouneed.com" className="text-gray-400 hover:text-white transition-colors">
                  info@rudren.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2026 Rudren  Packaging Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
