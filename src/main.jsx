import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./Routes/Routers.jsx";
import ContextProvider from "./ContextProvider/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routers}>
        <App />
      </RouterProvider>
    </ContextProvider>
  </React.StrictMode>
);
