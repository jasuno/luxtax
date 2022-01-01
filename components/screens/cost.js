import React from "react";
import Store from "../../store";
import { useRouter } from "next/router";
import { observer } from "mobx-react";
import { fadeIn } from "../../animations";
import Layout from "../elements/layout";

const Cost = () => {
  const router = useRouter();
  const action = () => {
    return (
      <button
        type="button"
        onClick={() => {
          router.push("/results");
        }}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-canadaRed hover:bg-canadaRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-canadaRed"
      >
        Calculate
      </button>
    );
  };

  const content = () => {
    return (
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
    );
  };

  return (
    <Layout
      variants={fadeIn}
      title="Cost of purchase."
      subtitle="How much are you spending on your vehicle?"
      content={content()}
      actionButton={action()}
      activePage={2}
    />
  );
};

export default observer(Cost);
