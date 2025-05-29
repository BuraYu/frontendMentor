import React from "react";

type SidebarElementProps = {
  isSidebarOpen: boolean;
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

type DataCategory = {
  [key: string]: Record<string, string>;
};

const Sidebar: React.FC<SidebarElementProps> = ({
  isSidebarOpen,
  selectedFilters,
  setSelectedFilters,
}) => {
  const data: DataCategory[] = [
    {
      difficulty: {
        easy: "Easy",
        simple: "Simple",
        mid: "Mid",
        advanced: "Advanced",
        hard: "Hard",
      },
    },
    {
      css: {
        css: "CSS",
        sass: "Sass",
        tailwind: "Tailwind",
      },
    },
    {
      techstack: {
        javascript: "Javascript",
        react: "React",
        nextjs: "NextJS",
        nodejs: "NodeJS",
        mongodb: "MongoDB",
      },
    },
  ];

  const handleCheckboxChange = (key: string) => {
    setSelectedFilters((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  return (
    <div
      className={`fixed w-64 h-screen bg-gray-200 p-4 top-0 z-50 shadow-lg transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } right-0`}
    >
      <div className="p-6 rounded-lg">
        <div className="flex flex-col space-y-6">
          {data.map((category, index) => {
            const key = Object.keys(category)[0];
            const values = category[key];

            return (
              <div
                key={index}
                className="flex flex-col pb-5 border-b border-gray-300 last:border-b-0"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  {key.toUpperCase()}
                </h3>
                <div className="flex flex-col space-y-2">
                  {Object.entries(values).map(([key, value]) => (
                    <label
                      key={key}
                      htmlFor={key}
                      className="flex items-center space-x-2 text-gray-600"
                    >
                      <input
                        type="checkbox"
                        id={key}
                        name={key}
                        checked={selectedFilters.includes(key)}
                        onChange={() => handleCheckboxChange(key)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span>{value}</span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
