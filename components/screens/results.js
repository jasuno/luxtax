import React from "react";
import Store from "../../store";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../../animations";
import BreadCrumbs from "../elements/breadcrumbs";
import Nav from "../elements/nav";

const converterToCurrency = (value) => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(value || 0);
};

const Results = () => {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="bg-gray-50">
        <div className=" absolute top-0 w-screen">
          <Nav />
        </div>
        <div className="flex items-center justify-center w-screen relative top-36">
          <BreadCrumbs active={3} />
        </div>
        <div className="max-w-7xl h-screen mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <h2 className="lg:w-1/2 lg:mb-0 mb-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Results</span>
            <span className="block text-canadaRed">
              Here is the breakdown of your purchase.
            </span>
          </h2>
          <div className="flex w-full lg:w-1/2 lg:mt-0 lg:flex-shrink-0">
            <motion.div
              variants={stagger}
              className=" w-full bg-red-50 py-4 px-6 rounded-md"
            >
              <motion.div
                variants={fadeInUp}
                className="flex flex-row items-center justify-between"
              >
                <p>Subtotal</p>
                <p>{converterToCurrency(Store.result.subtotal)}</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="w-full border-t my-4 border-red-200"
              />
              <motion.div
                variants={fadeInUp}
                className="flex flex-row items-center justify-between"
              >
                <p>Lux Tax</p>
                <p>{converterToCurrency(Store.result.luxtax)}</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="w-full border-t my-4 border-red-200"
              />
              <motion.div
                variants={fadeInUp}
                className="flex flex-row items-center justify-between"
              >
                <p>Tax</p>
                <p>{converterToCurrency(Store.result.tax)}</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="w-full border-t my-4 border-red-200"
              />
              <motion.div
                variants={fadeInUp}
                className="flex flex-row items-center justify-between"
              >
                <p className=" font-bold">Total</p>
                <p className=" font-bold">
                  {converterToCurrency(Store.result.total)}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Results;
