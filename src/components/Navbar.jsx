import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className={styles.navbar}>
      <h1>FinanceFlow</h1>
      <div className={styles.navLinks}>
        <button className={styles.navbarButton} onClick={toggleTheme}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
