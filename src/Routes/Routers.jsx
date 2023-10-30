import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layout/Home/Home";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routers;
