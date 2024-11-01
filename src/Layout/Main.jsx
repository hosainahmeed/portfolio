import { Outlet } from "react-router";
import NavbarContent from "../page/Home/Shared/Header/NavbarContent";
import Footer from "../page/Home/Shared/Footer/Footer";


const Main = () => {
  return (
    <div>
      <NavbarContent></NavbarContent>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
