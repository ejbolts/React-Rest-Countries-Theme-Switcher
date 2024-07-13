import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPage from "./components/DetailPage.jsx";
import CountryList from "./components/CountryList.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/React-Rest-Countries-Theme-Switcher/",
    element: <App />,
    children: [
      {
        index: true,
        element: <CountryList />,
      },
      {
        path: "detailPage/:countryName",
        element: <DetailPage />,
        // loader: fetchCountryDetails,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
