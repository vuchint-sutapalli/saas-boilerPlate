import LogoutBtn from "./LogoutBtn";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

import { useRecoilValue } from "recoil";
import { authState } from "../../Atoms";

const Header = () => {
  const authStatus = useRecoilValue(authState)?.status;

  const navItems = [
    {
      name: "Home",
      navTo: "/",
      active: true,
    },

    {
      name: "Login",
      navTo: "/login",
      active: !authStatus,
    },
  ];

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-gray-500 text-white shadow-md">
        <nav className="hidden md:flex md:w-full md:items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <Camera color="red" size={48} />
              <span className="text-2xl font-semibold tracking-wide">
                ReactApp
              </span>
            </Link>
          </div>
          <ul className="flex ml-auto w-full justify-around">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Link
                    to={item.navTo}
                    className="text-lg hover:text-blue-500 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
          {authStatus ? <LogoutBtn /> : null}
        </nav>

        <div className="md:hidden">
          {/* Add a mobile menu icon here if needed */}
        </div>
      </header>
    </>
  );
};

export default Header;
