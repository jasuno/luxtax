import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Store from "../../store";

const BreadCrumbs = ({ active }) => {
  const router = useRouter();

  const isVehicleAccessible = Boolean(Store.province);

  const isCostAccessible = Store.province && Store.vehicle;

  const isResultsAccessible = Store.province && Store.vehicle && Store.price;

  const pages = [
    { name: "Province", href: "/", current: false, finished: Store.province },
    {
      name: "Vehicle",
      href: isVehicleAccessible ? "/vehicle" : "#",
      current: true,
      finished: Store.vehicle,
    },
    {
      name: "Cost",
      href: isCostAccessible ? "/cost" : "#",
      current: true,
      finished: Store.price,
    },
    {
      name: "Results",
      href: isResultsAccessible ? "/results" : "#",
      current: true,
      finished: Store.result.total,
    },
  ];

  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          {pages.map((page, index) => (
            <li
              className=" cursor-pointer"
              onClick={() => router.push(page.href)}
              key={page.name}
            >
              <div className="flex items-center">
                {index !== 0 && (
                  <ChevronRightIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                )}
                <a
                  className={`text-sm font-medium text-gray-500 hover:text-gray-700 ${
                    index !== 0 && "ml-4 "
                  } ${index === active && "text-canadaRed "} ${
                    page.finished && "text-canadaRed font-semibold"
                  }`}
                  aria-current={index === active ? "page" : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumbs;
