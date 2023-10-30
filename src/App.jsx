import { Outlet } from "react-router-dom";
import Nav from "./Layout/Navbar/Nav";
import Footer from "./Layout/Footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
