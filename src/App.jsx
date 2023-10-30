import { Outlet } from "react-router-dom";
import Nav from "./Layout/Navbar/Nav";
import Footer from "./Layout/Footer/Footer";
import { useContext } from "react";
import { Context } from "./ContextProvider/ContextProvider";

const App = () => {
  const { theme } = useContext(Context);

  return (
    <div data-theme={theme ? "dark" : "light"}>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
