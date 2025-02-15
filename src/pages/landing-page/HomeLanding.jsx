import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaHandHoldingHeart, FaUtensils, FaRecycle, FaHandshake, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import NavbarLanding from '../../components/landingpage/NavbarLanding';
import { Link } from 'react-router-dom';


const HomeLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-[#f4fef1]/30">
    
        <NavbarLanding />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#f4fef1] to-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">
                  Save Food,{' '}
                  <span className="text-[#45c517]">Share Hope</span>
                </h1>
                <p className="text-lg mb-8 text-gray-600 max-w-lg">
                  Join us in reducing food waste and helping those in need. Together we can make a difference.
                </p>
                <Link to="/charity-campaign ">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-3 bg-[#45c517] text-white rounded-full shadow-lg hover:bg-[#3da414] hover:shadow-xl transition-all duration-200 flex items-center gap-2 mx-auto md:mx-0"
  >
    Donate Now
    <FaArrowRight />
  </motion.button>
</Link>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Food Donation"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Carousel Section */}
        <section className="relative w-full overflow-hidden h-[400px] px-8 my-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-2xl shadow-2xl"
          >
            <motion.div
              className="flex transition-transform duration-500 ease-in-out rounded-2xl overflow-hidden"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {[
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
                "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              ].map((imgSrc, index) => (
                <motion.div
                  key={index}
                  className="w-full flex-shrink-0 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={imgSrc} alt={`Slide ${index + 1}`} className="w-full h-[350px] object-cover rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                    <h2 className="text-white text-2xl font-bold">Slide Title {index + 1}</h2>
                    <p className="text-white/90">Short description for slide {index + 1}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.button
            className="absolute top-1/2 left-12 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? 4 : prev - 1))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#45c517]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            className="absolute top-1/2 right-12 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setCurrentSlide((prev) => (prev === 4 ? 0 : prev + 1))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#45c517]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {[
                { icon: FaHandHoldingHeart, title: "Donate Food", desc: "Share your surplus food with those in need" },
                { icon: FaUtensils, title: "Quality Assured", desc: "All donations meet food safety standards" },
                { icon: FaRecycle, title: "Reduce Waste", desc: "Help minimize food waste in our community" },
                { icon: FaHandshake, title: "Connect", desc: "Bridge the gap between donors and recipients" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-[#45c517]/10 p-4 rounded-2xl mb-6 w-fit mx-auto">
                    <feature.icon className="w-10 h-10 text-[#45c517]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-gradient-to-br from-[#f4fef1]/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Impact</h2>
              <p className="text-lg text-gray-600">Together we can make a difference in reducing food waste and helping those in need.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  img: "https://images.unsplash.com/photo-1541802645635-11f2286a7482",
                  title: "Meals Saved",
                  desc: "Over 10,000 meals rescued and shared with those in need"
                },
                {
                  img: "https://images.unsplash.com/photo-1593113630400-ea4288922497",
                  title: "Community Impact",
                  desc: "Supporting 50+ local communities and organizations"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl group bg-white"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12  shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Foodie</h3>
              <p className="text-gray-400">Making a difference through food sharing.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-400">Follow us on social media for updates and news.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 Foodie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeLanding;