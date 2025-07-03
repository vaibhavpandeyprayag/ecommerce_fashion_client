import { useState } from "react";
import PrimaryButton from "../components/PrimaryBtn";
import "./LoginPage.css";
import PrimaryInput from "../components/PrimaryInput";

const LoginPage = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div className="login-page">
      <form className="form">
        <h1
          className="brand-style"
          style={{
            textAlign: "center",
            width: "100%",
          }}
        >
          FASHION
        </h1>
        <h3
          style={{
            fontWeight: 500,
            marginBottom: "1rem",
            textAlign: "center",
            width: "100%",
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
          />
        </div>
        <div className="form-field w-100">
          <label className="form-label">Password</label>
          <PrimaryInput
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div className="form-field w-100" style={{ marginTop: "2rem" }}>
          <PrimaryButton
            title="Log in"
            tip="Login to the admin account"
            func={() => {}}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
