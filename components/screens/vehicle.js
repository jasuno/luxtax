import React from "react";
import Store from "../../store";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { stagger, fadeInLeft } from "../../animations";
import Layout from "../elements/layout";

const vehicles = [
  {
    type: "Car",
    imageUrl: "./images/car.png",
  },
  {
    type: "Boat",
    imageUrl: "./images/yatch.png",
  },
  {
    type: "Plane",
    imageUrl: "./images/jet.png",
  },
];

const Vehicle = () => {
  const router = useRouter();

  const content = () => {
    return (
      <motion.div
        variants={stagger}
        className="flex sm:flex-row flex-wrap w-full justify-center lg:mt-0 lg:flex-shrink-0"
      >
        {vehicles.map((vehicle, index) => (
          <motion.li
            variants={fadeInLeft}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              Store.updateVehicle(vehicle.type);
              router.push("/cost");
            }}
            key={index}
            className="col-span-1 w-36 mx-2 sm:mb-0 mb-2 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex  flex-col p-8">
              <img
                className="w-26 h-26 flex-shrink-0 mx-auto rounded-full"
                src={vehicle.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 font-semibold text-sm">
                {vehicle.type.toUpperCase()}
              </h3>
            </div>
          </motion.li>
        ))}
      </motion.div>
    );
  };

  return (
    <Layout
      title="Vehicle of purchase."
      subtitle="What type of vehicle are you buying?"
      content={content()}
      activePage={1}
    />
  );
};

export default observer(Vehicle);
