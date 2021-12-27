import React from "react";
import CanadaMap from "react-canada-map";
import Store from "../../store";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import BreadCrumbs from "../elements/breadcrumbs";
import Nav from "../elements/nav";

const Province = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 h-screen flex items-center justify-center"
    >
      <div className="absolute top-5 w-screen">
        <Nav />
      </div>
      <div className="flex items-center justify-center absolute w-screen top-36">
        <BreadCrumbs active={0} />
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row lg:justify-between">
        <h2 className="lg:w-1/3 lg:mb-0 mb-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Province of purchase.</span>
          <span className="block text-canadaRed">
            Where are you buying your vehicle?
          </span>
        </h2>
        <div className="flex w-full lg:w-2/3 lg:mt-0 lg:flex-shrink-0">
          <CanadaMap
            height={"100%"}
            width={"100%"}
            fillColor="#e1deca"
            onHoverColor="#c00d00"
            onClick={(response) => {
              Store.updateProvince(response);
              router.push("/vehicle");
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default observer(Province);
