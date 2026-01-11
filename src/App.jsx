import NavBar from "./Component/NavBar";
import Home from "./Pages/Home";
import { useTheme } from "./components/theme-provider";

import { Vortex } from "./components/ui/shadcn-io/vortex";

function App() {
  const {theme}=useTheme()
  return (
    <div className="   app-bg  w-full  overflow-x-hidden">
      
     
     
      <Home/>
      
  
    </div>
  );
}

export default App;
