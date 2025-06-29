import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  Award, 
  Users,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const products = [
    {
      id: 1,
      name: "Premium Dog Food",
      price: "₹1,299",
      originalPrice: "₹1,499",
      image: "🐕",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: "Cat Comfort Bed",
      price: "₹899",
      originalPrice: "₹1,199",
      image: "🐱",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Interactive Toy Set",
      price: "₹649",
      originalPrice: "₹799",
      image: "🎾",
      rating: 4.7,
      reviews: 234
    },
    {
      id: 4,
      name: "Pet Health Kit",
      price: "₹2,199",
      originalPrice: "₹2,699",
      image: "🏥",
      rating: 4.8,
      reviews: 67
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Paltooghar has been a lifesaver! The quality of pet food is amazing and my Golden Retriever, Max, absolutely loves it.",
      rating: 5,
      location: "Mumbai",
      petImage: "🐕‍🦺"
    },
    {
      name: "Rahul Kumar",
      text: "Adopted my cat Luna through Paltooghar. The process was smooth and the team was very supportive throughout.",
      rating: 5,
      location: "Delhi",
      petImage: "🐈"
    },
    {
      name: "Anjali Patel",
      text: "Fast delivery and excellent customer service. My pets are healthier and happier since switching to Paltooghar.",
      rating: 5,
      location: "Bangalore",
      petImage: "🐕"
    }
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Home Delivery",
      description: "Get your pet supplies delivered right to your doorstep within 24 hours"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Vet-Approved Products",
      description: "All our products are recommended and approved by certified veterinarians"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pet Adoption Center",
      description: "Find your perfect companion from our verified and healthy pet adoption center"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Safe and secure payment options with 100% money-back guarantee"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700/50' 
            : 'bg-white/95 backdrop-blur-md shadow-2xl'
          : isDarkMode
            ? 'bg-gray-900/70 backdrop-blur-sm'
            : 'bg-white/70 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce hover:animate-pulse">
                🐾
              </div>
              <span className={`text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-all duration-200`}>
                Paltooghar
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {['Home', 'Shop', 'Pets', 'About Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 relative group ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-purple-600/20' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' 
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-purple-600/20' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation - Sliding from right */}
          <div className={`md:hidden fixed top-16 right-0 h-screen w-80 max-w-[80vw] transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } ${
            isDarkMode 
              ? 'bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50' 
              : 'bg-white/95 backdrop-blur-md border-l border-gray-200/50'
          }`}>
            <div className="p-6 space-y-4">
              {['Home', 'Shop', 'Pets', 'About Us', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 hover:scale-105 transform hover:translate-x-2 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-purple-600/20' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Overlay */}
          {isMenuOpen && (
            <div 
              className="md:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-30"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50' 
            : 'bg-gradient-to-r from-purple-100/50 to-pink-100/50'
        }`}></div>
        
        {/* Floating animations */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce" style={{animationDelay: '0s'}}>🐕</div>
        <div className="absolute top-40 right-20 text-4xl animate-bounce" style={{animationDelay: '1s'}}>🐱</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-bounce" style={{animationDelay: '2s'}}>🦴</div>
        <div className="absolute top-60 right-10 text-3xl animate-bounce" style={{animationDelay: '1.5s'}}>🎾</div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 animate-fade-in ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Your Pet's
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                Happy Place
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Premium pet care products, adoption services, and everything your furry friends need to live their best life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 hover:from-purple-700 hover:to-pink-700">
                <ShoppingCart className="w-5 h-5" />
                <span>Shop Now</span>
              </button>
              
              <button className={`border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 ${
                isDarkMode ? 'hover:shadow-purple-500/25' : ''
              }`}>
                <Heart className="w-5 h-5" />
                <span>Adopt a Pet</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Why Choose Paltooghar?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We're committed to providing the best care for your beloved pets with premium products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 group ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-700 to-purple-800 hover:from-gray-600 hover:to-purple-700' 
                    : 'bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100'
                }`}
              >
                <div className="text-purple-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className={`py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 to-purple-900' 
          : 'bg-gradient-to-br from-gray-50 to-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Best Selling Products
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Discover our most loved products that keep pets healthy and happy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className={`aspect-square flex items-center justify-center text-8xl p-8 group-hover:scale-110 transition-transform duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-700 to-purple-800' 
                    : 'bg-gradient-to-br from-purple-100 to-pink-100'
                }`}>
                  {product.image}
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? 'fill-current' : ''
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`text-sm ml-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-purple-600">
                        {product.price}
                      </span>
                      <span className={`text-sm line-through ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-pink-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Happy Pet Parents
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              See what our customers and their furry friends have to say about us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`rounded-3xl p-8 md:p-12 text-center transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-700 to-purple-800' 
                : 'bg-gradient-to-br from-purple-50 to-pink-50'
            }`}>
              <div className="text-6xl mb-6 animate-pulse">
                {testimonials[currentTestimonial].petImage}
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className={`text-xl md:text-2xl mb-8 italic leading-relaxed ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-center">
                <p className={`text-lg font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {testimonials[currentTestimonial].name}
                </p>
                <p className={`${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentTestimonial
                      ? 'bg-purple-600 shadow-lg'
                      : isDarkMode 
                        ? 'bg-gray-600 hover:bg-gray-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Spoil Your Pet?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of happy pet parents and give your furry friend the care they deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Start Shopping</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  🐾
                </div>
                <span className="text-xl font-bold">Paltooghar</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner in pet care, providing premium products and services for your beloved companions.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-200" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-200" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-200" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Shop', 'Pet Adoption', 'Blog', 'Careers'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
              <ul className="space-y-3">
                {['Contact Us', 'FAQ', 'Shipping Info', 'Returns', 'Support'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">hello@paltooghar.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Paltooghar. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;