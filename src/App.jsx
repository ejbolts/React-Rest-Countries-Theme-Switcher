import { useState } from "react";
import CountrySearchFilter from "./components/CountrySearchFilter";
import Header from "./components/Header";

function App() {
  const [region, setRegion] = useState("Filter by Region");
  return (
    <div className="bg-gray-50 min-h-screen ">
      <Header />
      <CountrySearchFilter region={region} setRegion={setRegion} />
    </div>
  );
}

export default App;
