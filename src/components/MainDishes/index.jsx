import styles from "./maindishes.module.css";
import FoodContainer from "../FoodContainer";

const MainDishes = ({ setPage }) => {
  return (
    <div className={styles.main_page}>
      <h1>Main Dishes</h1>
      <h3>Discover the most popular and delicious Iranian dishes.</h3>
      <div>
        <FoodContainer setPage={setPage} category="main dishes" />
      </div>
    </div>
  );
};

export default MainDishes;
