import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "./Header";
import "./PagesWithMenus.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { decrypt, routes, ToastConfig, type AuthState } from "../utility";
import toast from "react-hot-toast";
const PagesWithMenus = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const auth: AuthState = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (auth.user == null || auth.token == null) {
      const user = localStorage.getItem("fashion-user");
      const token = localStorage.getItem("fashion-token");
      debugger;
      const decryptedUser = user != null ? JSON.parse(decrypt(user)) : null;
      const decryptedToken = token != null ? decrypt(token) : null;
      if (decryptedUser == null || decryptedToken == null) {
        navigator(routes.login);
        toast.error("Session Expired", ToastConfig);
      }
    }
  }, [auth]);
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
