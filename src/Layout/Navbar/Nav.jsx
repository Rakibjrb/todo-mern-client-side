import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import "./nav.css";

const navLinks = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/my/list">My List</NavLink>
    </li>
    <li>
      <NavLink to="/aboutus">About Us</NavLink>
    </li>
    <li>
      <NavLink to="/contactus">Contact Us</NavLink>
    </li>
  </>
);

const Nav = () => {
  return (
    <div className="bg-[#732FE6] text-white">
      <div className="max-w-7xl mx-auto py-5 px-3 xl:px-0">
        <nav className="flex lg:justify-between items-center">
          <img
            className="w-[18W0px] h-[50px] order-1 hidden lg:block"
            src={logo}
            alt="logo"
          />

          <ul className="items-center gap-5 font-playpen hidden lg:flex order-2">
            {navLinks}
          </ul>

          {/*drawer for mobile*/}
          <div className="drawer lg:hidden order-1 w-20 font-playpen">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn drawer-button">
                <FaBarsStaggered className="text-xl" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                {navLinks}
              </ul>
            </div>
          </div>

          <div className="order-3 hidden lg:block">
            <Link className="btn font-playpen">Login</Link>
          </div>

          <div className="flex lg:hidden items-center order-2 lg:order-3 justify-between w-full">
            <div className="order-3">
              <Link className="btn font-playpen">Login</Link>
            </div>
            <img
              className="w-[18W0px] h-[50px] order-2 lg:order-1 lg:hidden"
              src={logo}
              alt="logo"
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
