import styles from "./food-details.module.css";
import { getImageURL } from "../../utils/functioan";
import { foods } from "../../data/data.js";
import FoodInfo from "../FoodInfo";
import FoodIngredients from "../FoodIngredients";
import FoodRecipe from "../FoodRecipe";

const FoodDetails = ({ name }) => {
  const food = foods.find((item) => item.name === name);
  return (
    <>
      <div className={styles.container}>
        <img className={styles.food_img} src={getImageURL(food.image)} alt={name} />
        <div className={styles.food}>
          {name}
          <div className={styles.description}>{food.description}</div>
          <FoodInfo food={food} />
          <div className={styles.ing}>Ingredients & Recipe</div>
          <FoodIngredients food={food} />
          <FoodRecipe food={food} />
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
