import NavBar from "./Component/NavBar";
import Home from "./Pages/Home";
import { ChevronUp } from "lucide-react";

function App() {
  const scrollToTop = () => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app-bg w-full overflow-x-hidden relative">
      
   
      <Home />

      {/* 🔝 Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-6 right-6 z-50
          w-12 h-12 rounded-full
          bg-gradient-to-r from-emerald-500 to-teal-500
          flex items-center justify-center
          text-white shadow-lg
          hover:scale-110 transition-all
        "
        aria-label="Scroll to top"
      >
        <ChevronUp size={22} />
      </button>

    </div>
  );
}

export default App;
