const Navbar = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="max-w-[1400px] w-full px-4">
        <nav className="flex justify-between items-center py-4 ">
          <div className="text-xl font-bold">Logo</div>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Link1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Link2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Link3
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Link4
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
