import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

function Header() {
  const list = useSelector((state) => state.cart);
  return (
    <div className="sticky z-50 top-0">
      <nav className="flex items-center justify-between bg-gray-600 px-4 lg:px-6 py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white mr-8">Shopping</h1>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="flex space-x-4 ">
          <li className="text-white">
            <ShoppingCartIcon /> {list.length}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
