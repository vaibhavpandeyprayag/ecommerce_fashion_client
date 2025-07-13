import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryBtn";
import "./LoginPage.css";
import PrimaryInput from "../components/PrimaryInput";
import { useAPICall } from "../api/api";
import { encrpyt, routes, ToastConfig, type AuthState } from "../utility";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn } from "../state/authReducer";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const {
    loading: loginLoading,
    response: loginRes,
    error: loginErr,
    trigger: login,
  } = useAPICall();
  const dispatch = useDispatch();
  const authState: AuthState = useSelector((state: any) => state.auth);
  const navigator = useNavigate();

  useEffect(() => {
    // console.log(authState);
    if (authState.token != null) navigator("/admin/dashboard");
  }, []);

  useEffect(() => {
    // console.log(loginRes);
    dispatch(
      loggedIn({
        user: loginRes?.payload?.user,
        token: loginRes?.payload?.token,
      })
    );
    if (loginRes && loginRes.status_code == 200) {
      toast.success(loginRes.msg, ToastConfig);
      navigator(routes.dashboard);
    } else if (loginRes && loginRes.status_code != 200) {
      toast.error(loginRes.msg, ToastConfig);
    }
    if (loginErr) {
      toast.error(loginErr.message, ToastConfig);
    }
  }, [loginRes]);

  return (
    <div className="login-page">
      <form className="form">
        <h1
          className="brand-style"
          style={{
            textAlign: "center",
            width: "100%",
            fontSize: "4rem",
          }}
        >
          FASHION
        </h1>
        <h3
          style={{
            fontWeight: 500,
            marginBottom: "2rem",
            textAlign: "center",
            width: "100%",
            fontSize: "2rem",
          }}
        >
          Admin Login
        </h3>
        <div className="form-field w-100">
          <label className="form-label">Email</label>
          <PrimaryInput
            id="login_email"
            name="login_email"
            type="email"
            placeholder="Enter login email"
            value={email || ""}
            onInput={e => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="form-field w-100">
          <label className="form-label">Password</label>
          <PrimaryInput
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={password || ""}
            onInput={e => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="form-field w-100" style={{ marginTop: "2rem" }}>
          <PrimaryButton
            type="primary"
            title="Log in"
            tip="Login to the admin account"
            func={(e: Event) => {
              e.preventDefault();
              const encrytedPass = encrpyt(password as string);
              login("auth/logIn", "POST", {
                email: email,
                password: encrytedPass,
              });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
