import { Outlet } from "react-router";
import Header from "./Header";

const PagesWithHeader = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PagesWithHeader;
