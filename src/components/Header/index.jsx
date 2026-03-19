import styles from "./header.module.css";
import Navigation from "../Navigation";
import logo from "../../assets/images/Pagelogo.png";

const Header = ({ setPage }) => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Persian Cuisine Logo" className={styles.logo} />
      <nav>
        <Navigation setPage={setPage} />
      </nav>
    </div>
  );
};

export default Header;
