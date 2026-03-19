import { useState } from "react";
import bgHome from "./assets/images/bg-home.png";
import Header from "./components/Header";
import Home from "./components/Home";
import MainDishes from "./components/MainDishes";
import Desserts from "./components/Desserts";
import Drinks from "./components/Drinks";
import Footer from "./components/Footer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [page, setPage] = useState("Home");
  const pages = {
    Home: <Home setPage={setPage} />,
    "main dishes": <MainDishes setPage={setPage} />,
    dessert: <Desserts setPage={setPage} />,
    drink: <Drinks setPage={setPage} />,
  };

  return (
    <>
      <img src={bgHome} alt="" className="bgImage" />{" "}
      <div className="app">
        <Header setPage={setPage} />
        <main className="main">{pages[page] || <FoodDetails setPage={setPage} name={page} />}</main>
        <Footer />
      </div>
    </>
  );
}

export default App;
