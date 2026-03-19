import styles from "./foodingredients.module.css";

const FoodIngredients = ({ food }) => {
  return (
    <ul className={styles.ingredients}>
      {food.ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default FoodIngredients;
