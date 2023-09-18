import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-7xl text-cyan-400">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
