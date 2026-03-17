import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle-switch ${theme === "light" ? "light" : ""}`}>
        <div className="toggle-circle">
          {theme === "dark" ? "🌙" : "☀️"}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;