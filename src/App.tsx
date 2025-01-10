import React, { useState } from 'react';
import {
  ArrowRight, Wallet, Globe, Shield, CreditCard, Zap, ChevronDown, Coins, PieChart, Lock, Repeat, Menu, X, Lightbulb, Banknote, CoinsIcon, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-900 to-green-800 text-white relative">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wallet className="w-8 h-8" />
              <span className="text-2xl font-bold">FSPay</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-green-200 transition-colors">Services</a>
              <a href="#benefits" className="hover:text-green-200 transition-colors">Benefits</a>
              <a href="#token" className="hover:text-green-200 transition-colors">Token</a>
              <div className="flex items-center space-x-4">
                <button className="text-green-900 bg-white hover:bg-green-50 px-6 py-2 rounded-full transition-colors">
                  Login
                </button>
                <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full transition-colors">
                  Create Account
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden absolute inset-x-0 top-full bg-green-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="px-6 py-4 space-y-4">
              <a href="#services" className="block hover:text-green-200 transition-colors">Services</a>
              <a href="#benefits" className="block hover:text-green-200 transition-colors">Benefits</a>
              <a href="#token" className="block hover:text-green-200 transition-colors">Token</a>
              <div className="space-y-2">
                <button className="w-full text-green-900 bg-white hover:bg-green-50 px-6 py-2 rounded-full transition-colors">
                  Login
                </button>
                <button className="w-full bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full transition-colors">
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              The Future of African Financial Services
            </h1>
            <p className="text-lg md:text-xl text-green-100">
              FSPay is revolutionizing financial services in Africa through blockchain technology, providing secure, fast, and affordable solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full flex items-center justify-center space-x-2 transition-all transform hover:scale-105">
                <span>Create Account</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-full transition-all text-center">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000"
              alt="Digital Payment"
              className="rounded-lg shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-900">Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-green-600" />,
                title: "Cross-Border Payments",
                description: "Fast and secure international money transfers with competitive exchange rates."
              },
              {
                icon: <Repeat className="w-12 h-12 text-green-600" />,
                title: "Currency Exchange",
                description: "Seamless conversion between fiat and cryptocurrencies with real-time rates."
              },
              {
                icon: <Shield className="w-12 h-12 text-green-600" />,
                title: "Secure Wallet",
                description: "Multi-currency wallet for storing, sending, and receiving digital assets."
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-green-600" />,
                title: "Utility Payment",
                description: "Pay for utilities, bills, and services directly from your FSPay wallet."
              },
              {
                icon: <Banknote className="w-12 h-12 text-green-600" />,
                title: "OTC Deal",
                description: "Large-volume cryptocurrency trading with personalized service and competitive rates."
              },
              {
                icon: <CoinsIcon className="w-12 h-12 text-green-600" />,
                title: "Staking",
                description: "Earn rewards by staking your FSP tokens and supporting network security."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-green-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="py-20 bg-gradient-to-b from-green-900 to-green-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">FSPay Token (FSP)</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-800/50 backdrop-blur p-6 rounded-lg border border-green-700">
                  <p className="text-green-300 mb-2 text-sm">Token Symbol</p>
                  <p className="text-3xl font-bold">FSP</p>
                </div>
                <div className="bg-green-800/50 backdrop-blur p-6 rounded-lg border border-green-700">
                  <p className="text-green-300 mb-2 text-sm">Network</p>
                  <p className="text-3xl font-bold">BEP-20</p>
                </div>
                <div className="bg-green-800/50 backdrop-blur p-6 rounded-lg border border-green-700 col-span-2">
                  <p className="text-green-300 mb-2 text-sm">Total Supply</p>
                  <p className="text-3xl font-bold">1,000,000,000 FSP</p>
                </div>
              </div>
            </div>
            <div className="bg-green-800/50 backdrop-blur p-8 rounded-lg border border-green-700">
              <h3 className="text-xl font-bold mb-6">Token Distribution</h3>
              <div className="space-y-4">
                {[
                  { label: "Public Sale", value: "40%", color: "bg-green-500" },
                  { label: "Team & Advisors", value: "20%", color: "bg-green-400" },
                  { label: "Ecosystem Growth", value: "15%", color: "bg-green-300" },
                  { label: "Marketing", value: "10%", color: "bg-green-200" },
                  { label: "Reserve", value: "15%", color: "bg-green-100" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>{item.label}</span>
                      <span className="font-bold">{item.value}</span>
                    </div>
                    <div className="w-full bg-green-950 rounded-full h-2">
                      <div 
                        className={`${item.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: item.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Vesting Schedule",
                description: "Strategic token release schedule to ensure long-term project stability"
              },
              {
                icon: <Coins className="w-8 h-8" />,
                title: "Utility",
                description: "Used for transaction fees, governance, and platform rewards"
              },
              {
                icon: <PieChart className="w-8 h-8" />,
                title: "Tokenomics",
                description: "Designed for sustainable ecosystem growth and value appreciation"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-green-800/50 backdrop-blur p-6 rounded-lg border border-green-700 hover:border-green-500 transition-all">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* FAQ Section */}
       <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What is FSPay?",
                answer: "FSPay is a revolutionary financial platform that combines traditional financial services with blockchain technology, providing secure and efficient solutions for the African market."
              },
              {
                question: "How do I create an account?",
                answer: "Creating an account is simple. Click the 'Create Account' button, provide your email, create a password, and follow the verification process. You'll be ready to use FSPay in minutes."
              },
              {
                question: "What are FSP tokens used for?",
                answer: "FSP tokens are utility tokens used for transaction fees, governance voting, staking rewards, and accessing premium features on the FSPay platform."
              },
              {
                question: "Is FSPay secure?",
                answer: "Yes, FSPay implements bank-grade security measures including multi-factor authentication, encryption, and secure wallet technology to protect your assets and transactions."
              },
              {
                question: "What countries do you support?",
                answer: "FSPay currently supports operations across major African countries, with plans for continued expansion. Check our supported countries list for specific details."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-green-900">{faq.question}</span>
                  {openFAQ === index ? 
                    <ChevronUp className="w-5 h-5 text-green-600" /> : 
                    <ChevronDown className="w-5 h-5 text-green-600" />
                  }
                </button>
                <div className={`px-6 pb-4 ${openFAQ === index ? 'block' : 'hidden'}`}>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-green-900">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600">support@fspay.ng</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600">+234 (0) 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Wallet className="w-8 h-8" />
                <span className="text-2xl font-bold">FSPay</span>
              </div>
              <p className="text-green-100 mb-6">Revolutionizing financial services in Africa through blockchain technology.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-300 transition-colors"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="hover:text-green-300 transition-colors"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="hover:text-green-300 transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="hover:text-green-300 transition-colors"><Youtube className="w-6 h-6" /></a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Token</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
              <p className="text-green-100 mb-4">Stay updated with our latest news and updates.</p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 rounded-lg bg-green-800 border border-green-700 text-white placeholder-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-green-800 pt-8 text-center">
            <p className="text-green-100">&copy; {new Date().getFullYear()} FSPay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default App;