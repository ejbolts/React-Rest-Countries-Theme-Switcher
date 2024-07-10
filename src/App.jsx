import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { CountryProvider } from "./CountryContext";

function App() {
  return (
    <CountryProvider>
      <div className="bg-gray-50 min-h-screen ">
        <Header />
        <Outlet />
      </div>
    </CountryProvider>
  );
}

export default App;
