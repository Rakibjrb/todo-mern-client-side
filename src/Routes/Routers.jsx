import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/page-not-found/ErrorPage";
import Home from "../Pages/Home/Home";

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
    errorElement: <ErrorPage />,
  },
]);

export default routers;
