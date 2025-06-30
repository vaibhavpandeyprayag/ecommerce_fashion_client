import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { lazy, Suspense } from "react";
const CustomerApp = lazy(() => import("./app/customerapp/CustomerApp"));
const AdminApp = lazy(() => import("./app/adminapp/AdminApp"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>Loading</>}>
              <CustomerApp />
            </Suspense>
          }
        />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<>Loading</>}>
              <AdminApp />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
