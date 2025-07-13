import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "./Header";
import "./PagesWithMenus.css";
import { useEffect } from "react";
const PagesWithMenus = () => {
  const location = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="side-menu">
          <ul className="menu-list">
            <li>
              <a
                href="javascript:void(0)"
                className={
                  `menu-item` +
                  (location.pathname == "/admin/user/dashboard"
                    ? " active-item "
                    : "")
                }
                onClick={() => navigator("/admin/user/dashboard")}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className={
                  `menu-item` +
                  (location.pathname == "/admin/user/products"
                    ? " active-item "
                    : "")
                }
                onClick={() => navigator("/admin/user/products")}
              >
                Products
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="menu-item">
                Categories
              </a>
            </li>
          </ul>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default PagesWithMenus;
