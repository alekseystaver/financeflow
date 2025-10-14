import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Dashboard />
    </div>
  );
}
