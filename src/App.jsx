import { useState } from "react";
import CountrySearchFilter from "./components/CountrySearchFilter";
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import { Outlet } from "react-router-dom";
import { CountryContext, CountryProvider } from "./CountryContext";

function App() {
  return (
    <CountryProvider>
      <div className="bg-gray-50 min-h-screen ">
        <Header />
        <CountrySearchFilter />
        <CountryList />
        <Outlet />
      </div>
    </CountryProvider>
  );
}

export default App;
