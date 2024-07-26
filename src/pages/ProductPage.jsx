import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CardComponent from "../components/CardComponent";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.productPage}>
      <Navbar
        rectangleHeaderRowGap="unset"
        rectangleHeaderHeight="82.3px"
        rectangleHeaderTop="0"
        rectangleHeaderPosition="sticky"
        onAboutTextClick={onAboutTextClick}
      />
      <main className={styles.content}>
        <section className={styles.productCard}>
          <CardComponent />
          <FrameComponent1 />
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
