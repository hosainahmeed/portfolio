import { Outlet } from "react-router";
import NavbarContent from "../page/Home/Shared/Header/NavbarContent";
import Footer from "../page/Home/Shared/Footer/Footer";
import { useState } from "react";
import Loader from "../Component/Utils/Loader";

const Main = () => {
  const [loading, setLoading] = useState(true);

  const enterWord = () => {
    setLoading(false);
  };
  return (
    <div>
      {loading ? (
      <Loader enterWord={enterWord}></Loader>
      ) : (
        <div>
          <NavbarContent></NavbarContent>
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
