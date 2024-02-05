import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
