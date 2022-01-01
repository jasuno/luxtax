import React from "react";
import { motion } from "framer-motion";
import BreadCrumbs from "../elements/breadcrumbs";
import Nav from "../elements/nav";

const Layout = ({
  title,
  subtitle,
  content,
  actionButton,
  variants,
  activePage,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen flex flex-col md:items-center md:justify-center"
    >
      <div className="absolute top-0 w-screen">
        <Nav />
      </div>
      <div className="flex items-center justify-center absolute w-screen top-36">
        <BreadCrumbs active={activePage} />
      </div>
      <motion.div
        className="absolute top-40 lg:relative lg:top-0 "
        variants={variants}
      >
        <div className="max-w-7xl w-screen mx-auto py-12 px-4 sm:px-6  items-center lg:py-16 lg:px-8 flex flex-col lg:flex-row lg:justify-between">
          <h2 className="lg:w-1/2 lg:mb-0 mb-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">{title}</span>
            <span className="block text-canadaRed">{subtitle}</span>
          </h2>
          <div className="flex lg:w-1/2 md:ml-8 lg:mt-0 lg:flex-shrink-0">
            {content}
          </div>
        </div>
        <div className="flex items-center justify-center">{actionButton}</div>
      </motion.div>
    </motion.div>
  );
};

export default Layout;
