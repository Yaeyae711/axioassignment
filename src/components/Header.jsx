import React from "react";
import styles from "../modules/Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.border}>Digikull Students</div>
      <h1 className={styles.titles}>Users</h1>
    </div>
  );
};

export default Header;
