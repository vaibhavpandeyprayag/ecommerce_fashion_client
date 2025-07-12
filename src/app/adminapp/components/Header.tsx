import "./Header.css";
import { CgMenuGridO } from "react-icons/cg";
import PrimaryButton from "./PrimaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { routes, ToastConfig, type AuthState } from "../utility";
import { loggedOut } from "../state/authReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Header = () => {
  const auth: AuthState = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    if (auth.token == null) {
      navigator(routes.login);
      toast.success("Logout Successful", ToastConfig);
    }
  }, [auth]);
  return (
    <div className="header">
      <section style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
        <h1 className="brand-style" style={{ fontSize: "2rem" }}>
          FASHION
        </h1>
        <h2 style={{ color: "rgb(var(--gray))" }}>Admin</h2>
      </section>
      <section>
        {/* <button className="icon-button">
          <CgMenuGridO className="icon-button-icon" />
        </button> */}
        <PrimaryButton
          title="Log out"
          func={() => {
            dispatch(loggedOut());
          }}
        />
      </section>
    </div>
  );
};

export default Header;
