import styles from "./styles.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img
          src="/logo.avif"
          alt="Logo da sua empresa"
          className={styles.logo}
        />
      </header>
    </>
  );
};
import React from "react";

export default Header;
