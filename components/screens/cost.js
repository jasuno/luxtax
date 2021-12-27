import React from "react";
import Store from "../../store";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { observer } from "mobx-react";
import BreadCrumbs from "../elements/breadcrumbs";
import Nav from "../elements/nav";

const Cost = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 h-screen flex flex-col items-center justify-center"
    >
      <div className="absolute top-5 w-screen">
        <Nav />
      </div>
      <div className="flex items-center justify-center absolute w-screen top-36">
        <BreadCrumbs active={2} />
      </div>
      <div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row lg:justify-between">
          <h2 className="lg:w-1/2 lg:mb-0 mb-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Cost of purchase.</span>
            <span className="block text-canadaRed">
              How much are you spending on your vehicle?
            </span>
          </h2>
          <div className="flex lg:w-1/2 md:ml-8 lg:mt-0 lg:flex-shrink-0">
            <div className="w-full relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 md:text-2xl">$</span>
              </div>
              <input
                type="number"
                name="price"
                value={Store.price}
                id="price"
                autoComplete="off"
                onChange={(event) => {
                  Store.updatePrice(event.target.value);
                }}
                className="focus:ring-canadaRed focus:border-canadaRed block md:h-28 w-full pl-7 pr-12 md:text-6xl border-gray-300 rounded-md"
                placeholder="0.00"
                aria-describedby="price-currency"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 md:text-2xl" id="price-currency">
                  CAD
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => {
              router.push("/results");
            }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-canadaRed hover:bg-canadaRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-canadaRed"
          >
            Calculate
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default observer(Cost);
