"use client";

import { useState } from "react";
import Description from "./Description";
import FilterElements from "./FilterElements";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Challenges from "./Challenges";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex relative">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1">
        <Navbar />
        <Description />
        <FilterElements toggleSidebar={toggleSidebar} />
        <Challenges />
      </div>
    </div>
  );
};

export default Main;
