import NavbarLanding from "../../components/landingpage/NavbarLanding"
import RegistImage from "../../assets/img/regist.png"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import { useState } from "react"

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        role: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: 0.3
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: 0.3
            }
        }
    };

    const inputVariants = {
        focus: { scale: 1.01 },
        tap: { scale: 0.99 }
    };

    return (
        <div className="bg-gradient-to-br from-white to-green-50">
            <NavbarLanding />
            <section className="pt-16 lg:pt-24 min-h-screen flex items-center justify-center py-10 px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-4xl shadow-2xl bg-white flex flex-col md:flex-row rounded-3xl overflow-hidden"
                >
                    <motion.div
                        variants={formVariants}
                        className='w-full md:w-1/2 p-6 md:p-8 lg:p-12'
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mb-8"
                        >
                            <h1 className="text-3xl font-bold text-[#45c517] mb-2">Join CareBites</h1>
                            <p className='text-sm text-gray-600'>Already have an account?
                                <Link to="/login" className="text-[#45c517] hover:text-[#3ba113] ml-1 font-medium transition-colors">
                                    Login here
                                </Link>
                            </p>
                        </motion.div>

                        <form className='space-y-3' onSubmit={(e) => e.preventDefault()}>
                            <motion.div
                                className="space-y-1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <label className="text-sm font-medium text-gray-700">Username</label>
                                <motion.input
                                    variants={inputVariants}
                                    whileFocus="focus"
                                    whileTap="tap"
                                    className='w-full p-2 text-sm rounded-full border border-gray-300 focus:ring-2 focus:ring-[#45c517] focus:border-transparent transition-all outline-none'
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder='Enter your username'
                                />
                            </motion.div>

                            <motion.div
                                className="space-y-1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <motion.input
                                    variants={inputVariants}
                                    whileFocus="focus"
                                    whileTap="tap"
                                    className='w-full p-2 text-sm rounded-full border border-gray-300 focus:ring-2 focus:ring-[#45c517] focus:border-transparent transition-all outline-none'
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Enter your email'
                                />
                            </motion.div>

                            <motion.div
                                className="space-y-1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                <motion.input
                                    variants={inputVariants}
                                    whileFocus="focus"
                                    whileTap="tap"
                                    className='w-full p-2 text-sm rounded-full border border-gray-300 focus:ring-2 focus:ring-[#45c517] focus:border-transparent transition-all outline-none'
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder='Enter your phone number'
                                />
                            </motion.div>

                            <motion.div
                                className="space-y-1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 }}
                            >
                                <label className="text-sm font-medium text-gray-700">Register As</label>
                                <motion.select
                                    variants={inputVariants}
                                    whileFocus="focus"
                                    whileTap="tap"
                                    className='w-full p-2 text-sm rounded-full border border-gray-300 focus:ring-2 focus:ring-[#45c517] focus:border-transparent transition-all outline-none'
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select your role</option>
                                    <option value="Pengguna">User</option>
                                    <option value="Mitra">Partner</option>
                                    <option value="Lembaga Sosial">Social Institution</option>
                                </motion.select>
                            </motion.div>

                            <motion.div
                                className="space-y-1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0 }}
                            >
                                <label className="text-sm font-medium text-gray-700">Password</label>
                                <motion.input
                                    variants={inputVariants}
                                    whileFocus="focus"
                                    whileTap="tap"
                                    className='w-full p-2 text-sm rounded-full border border-gray-300 focus:ring-2 focus:ring-[#45c517] focus:border-transparent transition-all outline-none'
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder='Create a password'
                                />
                            </motion.div>

                            <motion.div
                                className="space-y-1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1 }}
                            >
                                <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                                <motion.input
                                    variants={inputVariants}
                                    whileFocus="focus"
                                    whileTap="tap"
                                    className='w-full p-2 text-sm rounded-full border border-gray-300 focus:ring-2 focus:ring-[#45c517] focus:border-transparent transition-all outline-none'
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder='Confirm your password'
                                />
                            </motion.div>

                            <motion.div
                                className="space-y-1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 }}
                            >
                                <label className="text-sm font-medium text-gray-700">Verification Code</label>
                                <div className="flex space-x-2">
                                    <motion.input
                                        variants={inputVariants}
                                        whileFocus="focus"
                                        whileTap="tap"
                                        className='flex-grow p-2 text-sm rounded-full border border-gray-300 focus:ring-2 focus:ring-[#45c517] focus:border-transparent transition-all outline-none'
                                        type="text"
                                        name="verificationCode"
                                        value={formData.verificationCode}
                                        onChange={handleChange}
                                        placeholder='Enter verification code'
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className='px-4 py-2 bg-[#45c517] rounded-full text-white font-semibold
                                        hover:bg-[#3ba113] transform transition-all duration-200
                                        focus:ring-4 focus:ring-[#45c517] focus:ring-opacity-50'
                                    >
                                        Send Code
                                    </motion.button>
                                </div>
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.3 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className='w-full bg-[#45c517] rounded-full py-2 text-white font-semibold
                                hover:bg-[#3ba113] transform transition-all duration-200
                                focus:ring-4 focus:ring-[#45c517] focus:ring-opacity-50'
                            >
                                Create Account
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div
                        variants={imageVariants}
                        className="hidden md:flex md:flex-col items-center justify-center w-1/2 bg-gradient-to-br from-gray-50 to-gray-200 p-12 relative overflow-hidden"
                    >
                        <div className="relative z-10 text-center space-y-4 mb-8">
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-5xl font-bold text-[#45c517]"
                            >
                                Join Us!
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-3xl font-semibold text-[#3ba113]"
                            >
                                Become part of our community
                            </motion.h2>
                        </div>

                        <motion.div
                            className="relative w-full max-w-3xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.img
                                whileHover={{
                                    scale: 1.05,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300
                                    }
                                }}
                                className="rounded-3xl w-full max-h-[80vh] object-cover"
                                src={RegistImage}
                                alt="Join Our Community"
                                loading="eager"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}

export default RegistrationPage
