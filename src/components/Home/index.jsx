import styles from "./home.module.css";
import Container from "../Container";

const Home = ({ setPage }) => {
  return (
    <div className={styles.main_page}>
      <h1> Persian Cuisine</h1>
      <h3>Discover traditional Iranian Food</h3>
      <div>
        <Container setPage={setPage} />
      </div>
    </div>
  );
};

export default Home;
