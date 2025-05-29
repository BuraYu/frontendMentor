"use client";

import { useState } from "react";
import Description from "./Description";
import FilterElements from "./FilterElements";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Challenges from "./Challenges";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const toggleSidebar = (): void => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex relative">
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="flex-1">
        <Navbar />
        <Description />
        <FilterElements
          toggleSidebar={toggleSidebar}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <Challenges searchInput={searchInput} />
      </div>
    </div>
  );
};

export default Main;
