import React from "react";
import Store from "../../store";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { stagger, fadeInLeft } from "../../animations";
import BreadCrumbs from "../elements/breadcrumbs";
import Nav from "../elements/nav";

const vehicles = [
  {
    type: "Car",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    type: "Boat",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    type: "Plane",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const Vehicle = () => {
  const router = useRouter();
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="bg-gray-50">
        <div className=" absolute top-0 w-screen">
          <Nav />
        </div>
        <div className="flex items-center justify-center absolute w-screen top-36">
          <BreadCrumbs active={1} />
        </div>
        <div className="max-w-7xl h-screen mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <h2 className="lg:w-1/3 lg:mb-0 mb-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Vehicle of purchase</span>
            <span className="block text-canadaRed">
              What type of vehicle are you buying?
            </span>
          </h2>
          <motion.div
            variants={stagger}
            className="flex lg:w-2/3 lg:mt-0 lg:flex-shrink-0"
          >
            {vehicles.map((person, index) => (
              <motion.li
                variants={fadeInLeft}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  Store.updateVehicle(person.type);
                  router.push("/cost");
                }}
                key={index}
                className="col-span-1 mx-2 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="flex-1 flex flex-col p-8">
                  <img
                    className="w-26 h-26 flex-shrink-0 mx-auto rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-gray-900 font-semibold text-sm">
                    {person.type.toUpperCase()}
                  </h3>
                </div>
              </motion.li>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default observer(Vehicle);
