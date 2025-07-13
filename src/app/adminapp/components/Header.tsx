import "./Header.css";
import PrimaryButton from "./PrimaryBtn";
import { useDispatch, useSelector } from "react-redux";
import { routes, ToastConfig, type AuthState } from "../utility";
import { loggedOut } from "../state/authReducer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import Modal from "./Modal";

const Header = () => {
  const auth: AuthState = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [logoutVerifyShow, setLogoutVerifyShow] = useState(false);

  useEffect(() => {
    if (auth.token == null) {
      navigator(routes.login);
      toast.success("Logout Successful", ToastConfig);
    }
  }, [auth]);
  return (
    <div className="header">
      <Modal
        showModal={logoutVerifyShow}
        header={
          <div className="modal-header">
            <h1>Logout</h1>
          </div>
        }
        body={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              padding: "5rem",
            }}
          >
            <h1 style={{ fontWeight: 500 }}>Are you sure?</h1>
          </div>
        }
        footer={
          <div className="modal-footer">
            <div
              style={{ display: "flex", justifyContent: "end", gap: "1rem" }}
            >
              <PrimaryButton
                type="outline"
                title={"No"}
                func={() => {
                  setLogoutVerifyShow(false);
                }}
              />
              <PrimaryButton
                type="primary"
                title={"Yes"}
                func={() => {
                  dispatch(loggedOut());
                  navigator(routes.login);
                }}
              />
            </div>
          </div>
        }
      />
      <section style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
        <h1 className="brand-style" style={{ fontSize: "2rem" }}>
          FASHION
        </h1>
        <h2 style={{ color: "rgb(var(--gray))" }}>Admin</h2>
      </section>
      <section>
        <PrimaryButton
          type="primary"
          title="Log out"
          func={() => {
            setLogoutVerifyShow(true);
          }}
        />
      </section>
    </div>
  );
};

export default Header;
