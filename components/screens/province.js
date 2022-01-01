import React from "react";
import CanadaMap from "react-canada-map";
import Store from "../../store";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { fadeIn } from "../../animations";
import Layout from "../elements/layout";

import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const provinces = [
  { id: "ab", name: "Alberta" },
  { id: "bc", name: "British Columbia" },
  { id: "mb", name: "Manitoba" },
  { id: "nb", name: "New Brunswick" },
  { id: "nl", name: "Newfoundland" },
  { id: "ns", name: "Nova Scotia" },
  { id: "nt", name: "Northwest Territories" },
  { id: "nu", name: "Nunavut" },
  { id: "on", name: "Ontario" },
  { id: "pe", name: "Prince Edward Island" },
  { id: "qc", name: "Quebec" },
  { id: "sk", name: "Saskatchewan" },
  { id: "yt", name: "Yukon" },
];

const Province = () => {
  const router = useRouter();

  const customizeProvince = () => {
    return {
      [Store.province]: {
        fillColor: "#c00d00",
      },
    };
  };

  const content = () => {
    return (
      <CanadaMap
        customize={customizeProvince()}
        height={"100%"}
        width={"100%"}
        fillColor="#e1deca"
        onHoverColor="#c00d00"
        onClick={(response) => {
          Store.updateProvince(response);
          Store.updateProvinceName(
            provinces.find((province) => {
              return province.id === response.toLowerCase();
            }).name
          );
          router.push("/vehicle");
        }}
      />
    );
  };

  const dropDown = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <Listbox
          placeholder="Select a province"
          value={Store.provinceName}
          onChange={(val) => {
            Store.updateProvince(val.id.toLocaleUpperCase());
            Store.updateProvinceName(val.name);
          }}
        >
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm mr-2 font-medium text-gray-700">
                Province
              </Listbox.Label>
              <div className="mt-1 relative">
                <Listbox.Button className="bg-white w-48 relative border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-canadaRed focus:border-canadaRed sm:text-sm">
                  <span className="block truncate">{Store.provinceName}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {provinces.map((province) => (
                      <Listbox.Option
                        key={province.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "text-white bg-canadaRed"
                              : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={province}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {province.name}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-canadaRed",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
        <button
          type="button"
          onClick={() => {
            router.push("/vehicle");
          }}
          className="inline-flex mt-4 items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-canadaRed hover:bg-canadaRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-canadaRed"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <Layout
      variants={fadeIn}
      title="Province of purchase."
      subtitle="Where are you buying your vehicle?"
      content={content()}
      activePage={0}
      actionButton={dropDown()}
    />
  );
};

export default observer(Province);
