import React, { useContext } from "react";
import Header from "./components/Header";
import { Outlet, useNavigation } from "react-router-dom";
import { CountryProvider, CountryContext } from "./CountryContext";
import TopBarProgress from "react-topbar-progress-indicator";

function AppContent() {
  const { darkMode } = useContext(CountryContext);
  const navigation = useNavigation();
  if (darkMode) {
    TopBarProgress.config({
      barColors: {
        0: "#fff",
        "1.0": "#fff",
      },
      shadowBlur: 5,
    });
  } else {
    TopBarProgress.config({
      barColors: {
        0: "#000",
        "1.0": "#000",
      },
      shadowBlur: 5,
    });
  }
  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-darkModeBG" : "bg-lightModeBG"
      }`}
    >
      <Header />
      {navigation.state == "loading" ? <TopBarProgress /> : <Outlet />}
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
