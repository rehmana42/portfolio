import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

export default function ThemeToggle() {
const {theme,setTheme}=useTheme()

  useEffect(()=>{
    console.log(theme)
  },[theme])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`    place-self-center cursor-pointer`}
    >
       
      <Sun size={20} className=" dark:hidden cursor-pointer" />
      <Moon size={20} className=" hidden dark:block cursor-pointer" />
    </Button>
  );
}
