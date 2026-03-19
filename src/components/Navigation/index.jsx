import styles from "./navigation.module.css";

const Navigation = ({ setPage }) => {
  const handleClick = (pageType) => {
    setPage(pageType);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navItem} onClick={() => handleClick("Home")}>
          Home
        </div>
        <div className={styles.navItem} onClick={() => handleClick("main dishes")}>
          Main Dishes
        </div>
        <div className={styles.navItem} onClick={() => handleClick("dessert")}>
          Desserts
        </div>
        <div className={styles.navItem} onClick={() => handleClick("drink")}>
          Drinks
        </div>
      </nav>
    </>
  );
};

export default Navigation;
