import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SignupPage from "./pages/SignupPage";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { Toaster } from "react-hot-toast";
import PagesWithMenus from "./components/PagesWithMenus";
import ProductsPage from "./pages/ProductsPage";
import "./AdminApp.css";

const AdminApp = () => {
  return (
    <Provider store={store}>
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/" element={<PagesWithMenus />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default AdminApp;
