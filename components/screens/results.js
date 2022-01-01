import React from "react";
import Store from "../../store";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../../animations";
import Layout from "../elements/layout";

const converterToCurrency = (value) => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(value || 0);
};

const content = () => {
  return (
    <div className="flex w-full lg:mt-0 lg:flex-shrink-0">
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
          <p>Luxury Tax</p>
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
          <p>Tax | HST / GST</p>
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
  );
};

const explanation = () => {
  return (
    <div className="mx-4  md:w-1/2 text-center font-medium mb-24 md:mb-0">
      <p>{`Since you are buying a ${converterToCurrency(
        Store.result.subtotal
      )} ${
        Store.vehicle
      }, 10 per cent of the total value would be ${converterToCurrency(
        Store.result.lowLux
      )}, and 20 per cent of the value above ${
        Store.vehicle.toLocaleLowerCase() === "boat" ? "$250,000" : "$100,000"
      } would be ${converterToCurrency(
        Store.result.highLux
      )}, so you’d be required to pay ${converterToCurrency(
        Store.result.highLux < Store.result.lowLux
          ? Store.result.highLux
          : Store.result.lowLux
      )} in luxury tax, which is the lesser of the two.`}</p>

      <p className="mt-6">
        For more information visit the{" "}
        <a
          className="text-canadaRed font-bold"
          href="https://www.canada.ca/en/department-finance/programs/consultations/2021/consultation-proposed-luxury-tax.html"
        >
          official government website
        </a>
      </p>
    </div>
  );
};

const Results = () => {
  return (
    <Layout
      title="Results."
      subtitle="Here is the breakdown of your purchase."
      content={content()}
      activePage={3}
      actionButton={explanation()}
    />
  );
};

export default Results;
