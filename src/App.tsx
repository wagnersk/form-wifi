import { HeroSection } from "./pages/HeroSection";
import { FormWifi } from "./pages/FormWifi";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="hero-section">
        <HeroSection />
      </div>

      <div className="leads-section">
        <FormWifi />
      </div>
    </div>
  );
}