import styles from "./container.module.css";
import Card from "../Card";
import { foods } from "../../data/data.js";

const Container = ({ setPage }) => {
  const uniqCategories = [...new Set(foods.map((item) => item.category))];

  return (
    <div className={styles.container}>
      {uniqCategories.map((category, index) => (
        <Card key={index} category={category} setPage={setPage} />
      ))}
    </div>
  );
};

export default Container;
