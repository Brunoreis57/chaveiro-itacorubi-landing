import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

const THEME_KEY = "theme";

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

function getInitialTheme(): "light" | "dark" {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      return getInitialTheme();
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    applyTheme(theme);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={theme === "dark" ? "Modo claro" : "Modo escuro"}
      onClick={toggleTheme}
      className="text-white hover:text-header-blue hover:bg-white/20"
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </Button>
  );
};

export default ThemeToggle;