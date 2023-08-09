import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <div className="header">
        <div className="headerLogo">
          <img
            className="navLogo"
            src="../src/assets/images/logo/rooLogo.png"
            alt="logo"
          />
        </div>
        <div className="headerNav">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          <NavLink to="/faq" activeClassName="active">FAQ</NavLink>
          <NavLink to="/cart" activeClassName="active">Cart</NavLink>
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
