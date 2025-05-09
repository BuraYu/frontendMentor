type SidebarElementProps = {
  isSidebarOpen: boolean;
};

const Sidebar = ({ isSidebarOpen }: SidebarElementProps) => {
  return (
    <div
      className={`fixed w-64 h-screen bg-gray-200 p-4 top-0 z-50 shadow-lg transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } right-0`}
    >
      <h2 className="font-bold">Sidebar</h2>
      <p>Content.</p>
    </div>
  );
};

export default Sidebar;
