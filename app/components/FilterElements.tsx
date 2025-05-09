"use client";

import { ChevronDown, FunnelPlus, Search } from "lucide-react";
import { useCallback, useState } from "react";

type FilterElementsProps = {
  toggleSidebar: () => void;
};

const FilterElements = ({ toggleSidebar }: FilterElementsProps) => {
  const [dropdownOpen, setDropDownOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeSelection, setActiveSelection] =
    useState<string>("Newest to oldest");
  const [sidebarActive, setSidebarActive] = useState<boolean>(true);

  const handleActive = (index: number, item: string) => {
    setActiveIndex(index);
    setActiveSelection(item);
  };

  return (
    <div className="relative max-w-[1200px] mx-auto w-full p-4">
      <div className="flex">
        <div className="flex flex-col md:flex-row gap-4 w-full justify-between ">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Challenges"
              className="w-full border-2 border-gray-200 px-2 py-3 focus:outline-1 focus:outline-blue-200"
            />
            <Search
              className="absolute top-4 right-3"
              size={20}
              strokeWidth={1}
            />
          </div>

          <div className="flex w-full flex-col sm:flex-row justify-between md:justify-end items-center gap-4">
            <button
              className="flex items-center justify-center gap-2 relative w-full md:w-auto border px-3 py-2 border-gray-200"
              onClick={toggleSidebar}
            >
              <FunnelPlus size={15} />
              Filter
            </button>
            <div
              className="relative flex justify-between w-full md:w-auto min-w-[200px] border px-5 py-2 border-gray-200"
              onClick={() => setDropDownOpen(!dropdownOpen)}
            >
              <span>{activeSelection}</span>
              <ChevronDown
                strokeWidth={1}
                className={` ml-2 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                } transform transition-transform duration-300`}
              />
              {dropdownOpen && (
                <div className="absolute top-11 left-0 right-0 border border-gray-200">
                  <ul className="flex flex-col gap-1 bg-white">
                    {[
                      "Newest to oldest",
                      "Oldest to newest",
                      "Easiest to hardest",
                      "Hardest to easiest",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className={`hover:bg-gray-300 px-3 py-2  ${
                          activeIndex === index
                            ? "font-medium border-l-3 border-l-amber-500"
                            : "border-l-3 border-l-transparent"
                        }`}
                        onClick={() => handleActive(index, item)}
                      >
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterElements;
