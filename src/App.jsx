import React, { useContext } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { CountryProvider, CountryContext } from "./CountryContext";

function AppContent() {
  const { darkMode } = useContext(CountryContext);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-darkModeBG" : "bg-lightModeBG"
      }`}
    >
      <Header />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <CountryProvider>
      <AppContent />
    </CountryProvider>
  );
}

export default App;
