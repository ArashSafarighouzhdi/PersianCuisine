import styles from "./desserts.module.css";
import FoodContainer from "../FoodContainer";

const Desserts = ({ setPage }) => {
  return (
    <div className={styles.main_page}>
      <h1>Desserts</h1>
      <h3>Satisfy your sweet tooth with these authentic Persian treats.</h3>
      <div>
        <FoodContainer setPage={setPage} category= "dessert" />
      </div>
    </div>
  );
};

export default Desserts;
