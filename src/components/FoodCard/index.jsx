import styles from "./foodcard.module.css";
import { getImageURL } from "../../utils/functioan";

const FoodCard = ({ setPage, name }) => {
  const image = `${name}.png`;

  return (
    <div className={styles.card} onClick={() => setPage(name)}>
      <img className={styles.card_img} src={getImageURL(image)} alt={name} />
      <button className={styles.card_title}>{name}</button>
    </div>
    
  );
};

export default FoodCard;
