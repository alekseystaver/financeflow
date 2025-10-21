import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Fund from "./pages/Fund";
import "./App.css";

export default function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Dashboard />
      <Fund />
    </div>
  );
}
