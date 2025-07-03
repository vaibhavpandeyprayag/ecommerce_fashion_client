import PrimaryButton from "../components/PrimaryBtn";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <div>
      <div className="signup-page">
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
            Admin
          </h3>
          <div className="form-field w-100">
            <label className="form-label">Email</label>
            <input
              className="form-input w-100"
              type="email"
              placeholder="Enter login email"
            />
          </div>
          <div className="form-field w-100">
            <label className="form-label">Password</label>
            <input
              className="form-input w-100"
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
    </div>
  );
};

export default SignupPage;
