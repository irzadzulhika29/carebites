// HomeDashboard.jsx
import { motion } from "framer-motion";
import Sidebar from "../../../components/dashboard/Sidebar";
import Navbar from "../../../components/dashboard/Navbar";
import ArticleCard from "../../../components/dashboard/article/ArticleCard";
import { Link } from "react-router-dom";
import articleData from "../../../assets/blogarticle/articleData.json";

const BlogArtikel = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
      <div className="flex min-h-screen">
        {/* Static Sidebar */}
        <Sidebar />

        <section className="bg-[#f4fef1] w-full pl-60 pt-20">
          <div className="flex-grow">
            {/* Static Navbar */}
            <Navbar showSearchBar={false} />

            <motion.div
              className="mt-5 mx-10 flex justify-between items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Page Title */}
              <motion.h1
                className="text-[#45c517] text-2xl font-bold"
                variants={itemVariants}
              >
                Blog & Artikel
              </motion.h1>

              {/* Create Article Section */}
              <motion.div
                className="flex flex-col items-end gap-2"
                variants={itemVariants}
              >
                <p className="text-sm font-semibold text-[#45c517]">Bagikan Inspirasi Anda!</p>

                <Link to="/article-form">
                  <motion.div
                    className="group hover:cursor-pointer bg-gradient-to-r from-[#45c517] to-[#3ca315] text-white py-1.5 rounded-full px-3 flex items-center space-x-1.5 shadow-md"
                    whileHover={{ scale: 1.03, boxShadow: "0 4px 8px rgba(69, 197, 23, 0.3)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square transition-transform group-hover:rotate-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                      />
                    </motion.svg>
                    <p className="text-sm font-semibold tracking-wide">Tulis Artikel</p>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Articles Section */}
            <motion.section
              className="min-h-screen mx-10 my-5 rounded-md"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="flex gap-8 flex-wrap justify-between"
                variants={containerVariants}
              >
                {articleData.map((article) => (
                  <motion.div
                    key={article.id}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Link to={`/article/${article.id}`}>
                      <ArticleCard article={article} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </section>
      </div>
  );
};

export default BlogArtikel;
