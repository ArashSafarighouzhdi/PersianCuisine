import styles from "./foodinfo.module.css";
import { TbCategoryPlus } from "react-icons/tb";
import { LuVegan } from "react-icons/lu";
import { IoMdTimer } from "react-icons/io";
import { LuCookingPot } from "react-icons/lu";

const FoodInfo = ({ food }) => {
  return (
    <div className={styles.info}>
      <div className={styles.details}>
        <TbCategoryPlus className={styles.icon} />
        <span className={styles.data}>{food.category}</span>
      </div>
      <div className={styles.details}>
        <LuVegan className={styles.icon} />
        <span className={styles.data}> {food.vegetarian ? "Yes" : "No"} </span>
      </div>
      <div className={styles.details}>
        <IoMdTimer className={styles.icon} />
        <span className={styles.data}>{food.cookingTime} </span>
      </div>
      <div className={styles.details}>
        <LuCookingPot className={styles.icon} />
        <span className={styles.data}> {food.difficulty} </span>
      </div>
    </div>
  );
};

export default FoodInfo;
