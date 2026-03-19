import styles from "./foodrecipe.module.css";

const FoodRecipe = ({food}) => {
  return (
    <ol className={styles.recipe}>
      {food.recipe.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
};
export default FoodRecipe;
