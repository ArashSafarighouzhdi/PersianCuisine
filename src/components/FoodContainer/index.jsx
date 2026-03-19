import styles from "./foodcontainer.module.css";
import FoodCard from "../FoodCard/index.jsx";
import { foods } from "../../data/data.js";

const FoodContainer = ({ setPage, category }) => {
  const foodCategories = foods.filter((c) => c.category === category);

  const uniqfoods = [...new Set(foodCategories.map((item) => item.name))];

  return (
    <div className={styles.container}>
      {uniqfoods.map((name, index) => (
        <FoodCard key={index} name={name} setPage={setPage} />
      ))}
    </div>
  );
};

export default FoodContainer;
