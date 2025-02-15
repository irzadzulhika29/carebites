import NavbarLanding from '../../components/landingpage/NavbarLanding'
import LoginImage from "../../assets/img/login.png"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
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
          {/* Form Section */}
          <motion.div
            variants={formVariants}
            className="w-full md:w-1/2 p-6 md:p-8 lg:p-12"
          >
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#45c517] mb-2">Welcome Back!</h1>
              <p className="text-sm text-gray-600">New to CareBites?
                <Link to="/regist" className="text-[#45c517] hover:text-[#3ba113] ml-1 font-medium transition-colors">
                  Create an account
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-700">Email Address</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  className="w-full p-2 text-sm rounded-full border border-gray-300 focus:ring-2 focus:ring-[#45c517] focus:border-transparent transition-all outline-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-700">Password</label>
                <div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    className="w-full p-2 text-sm rounded-full border border-gray-300 focus:ring-2 focus:ring-[#45c517] focus:border-transparent transition-all outline-none"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? <HiEyeOff size={16} /> : <HiEye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-[#45c517] focus:ring-[#45c517]" />
                  <span className="ml-1 text-gray-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-[#45c517] hover:text-[#3ba113] transition-colors">
                  Forgot Password?
                </Link>
              </div>

             
              <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-[#45c517] rounded-full py-2 text-sm text-white font-semibold
      hover:bg-[#3ba113] transform transition-all duration-200
      focus:ring-4 focus:ring-[#45c517] focus:ring-opacity-50"
      onClick={() => navigate('/home')}
    >
      Sign In (Need No Account)
    </motion.button>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-600">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white border border-gray-300 rounded-full py-2 text-sm text-gray-700 font-semibold
                hover:bg-gray-50 transform transition-all duration-200
                focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50 flex items-center justify-center"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="w-5 h-5 mr-2" />
              Sign in with Google
            </motion.button>
          </form>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          className='hidden md:block w-1/2 bg-white p-8 flex items-center justify-center'
        >
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-[#45c517] mb-4'>Welcome Back!</h2>
            <p className='text-gray-600 mb-6'>Sign in to continue your journey with CareBites</p>
            <img
              className='rounded-2xl object-cover w-full p-6 transform hover:scale-105 transition-transform duration-300'
              src={LoginImage}
              alt="Login Illustration"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
    </div >
  );
};

export default LoginPage;
