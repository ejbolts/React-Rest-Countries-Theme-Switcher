import { useState } from "react";
import "./App.css";
import CountrySearchFilter from "./components/CountrySearchFilter";
import Header from "./components/Header";

function App() {
  const [region, setRegion] = useState("Filter by Region");
  return (
    <>
      <Header />
      <CountrySearchFilter region={region} setRegion={setRegion} />
    </>
  );
}

export default App;
