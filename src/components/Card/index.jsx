import styles from "./card.module.css";
import { getImageURL } from "../../utils/functioan";

const Card = ({ category, setPage }) => {
  const image = `${category}.png`;

  return (
    <div className={styles.card} onClick={() => setPage(category)}>
      <img className={styles.card_img} src={getImageURL(image)} alt={category} />
      <button className={styles.card_title}>{category}</button>
    </div>
  );
};

export default Card;
