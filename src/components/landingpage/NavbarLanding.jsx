import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const NavbarLanding = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: "Home", path: "/", current: true },
        { name: "About Us", path: "#", current: false },
        { name: "Article", path: "#", current: false },
        { name: "Contact", path: "#", current: false },
    ];

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link to="/">
                            <h1 className="text-3xl text-[#47cb18] font-bold">
                                Care<span className="text-black">Bites</span>
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop Menu Items */}
                    <div className="hidden md:flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`${
                                    item.current
                                        ? "text-black font-semibold"
                                        : "text-gray-600"
                                } hover:text-[#45c517] transition-colors duration-200`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 border border-[#45c517] text-[#45c517] rounded-full hover:bg-[#45c517] hover:text-white transition-all duration-200"
                            >
                                Log in
                            </motion.button>
                        </Link>
                        <Link to="/regist">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-[#45c517] text-white rounded-full hover:bg-[#3ca315] transition-all duration-200"
                            >
                                Register
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                            {isMenuOpen ? (
                                <HiX className="h-6 w-6 text-[#45c517]" />
                            ) : (
                                <HiMenu className="h-6 w-6 text-[#45c517]" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t border-gray-200"
                    >
                        <div className="px-4 py-2 space-y-1 bg-white">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`${
                                        item.current
                                            ? "text-black font-semibold"
                                            : "text-gray-600"
                                    } block px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#45c517] transition-colors duration-200`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 pb-2 border-t border-gray-200">
                                <Link
                                    to="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <button className="w-full mb-2 px-4 py-2 border border-[#45c517] text-[#45c517] rounded-full hover:bg-[#45c517] hover:text-white transition-all duration-200">
                                        Log in
                                    </button>
                                </Link>
                                <Link
                                    to="/regist"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <button className="w-full px-4 py-2 bg-[#45c517] text-white rounded-full hover:bg-[#3ca315] transition-all duration-200">
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavbarLanding;
