import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
import {useEffect, useState} from "react";

export default function Footer() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = localStorage.getItem("theme") === "dark";
    if (isDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);



  return (
    <footer>
      <div className="left">
        <label className="switch" htmlFor="theme">
          <input
            type="checkbox"
            id="theme"
            checked={theme === "dark"}
            onChange={
              () => {
                setTheme(theme === "dark" ? "light" : "dark")
              }
            }
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="socials">
        <div className="social">
          <Link href={"https://github.com/ValDesign22"} target="_blank">
            <BsGithub />
            <span className="tooltip">Github</span>
          </Link>
        </div>
        <div className="social">
          <Link href={"mailto:valdesign.dev@gmail.com"} target="_blank">
            <SiGmail />
            <span className="tooltip">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}