import styles from "./drinks.module.css";
import FoodContainer from "../FoodContainer";

const Drinks = ({ setPage }) => {
  return (
    <div className={styles.main_page}>
      <h1>Drinks</h1>
      <h3>Experience the unique taste of traditional Iranian drinks.</h3>
      <div>
        <FoodContainer setPage={setPage} category="drink" />
      </div>
    </div>
  );
};

export default Drinks;
