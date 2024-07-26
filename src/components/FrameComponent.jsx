import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCartClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  return (
    <div className={[styles.actionsParent, className].join(" ")}>
      <div className={styles.actions}>
        <img
          className={styles.addBookmarkIcon}
          loading="lazy"
          alt=""
          src="/add-bookmark@2x.png"
        />
        <h3 className={styles.recommendProduct}>Recommend Product</h3>
      </div>
      <div className={styles.productCarousel}>
        <div className={styles.carouselItems}>
          <div className={styles.carouselItemsInner}>
            <div className={styles.cart1Parent}>
              <div className={styles.cart1} onClick={onCartClick} />
              <div className={styles.png1Parent}>
                <img className={styles.png1Icon} alt="" src="/png12@2x.png" />
                <img
                  className={styles.saleIcon}
                  loading="lazy"
                  alt=""
                  src="/sale1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.levisTShirtWrapper}>
                <div className={styles.levisTShirt}>Levi’s T-Shirt</div>
              </div>
              <div className={styles.tShirt}>T-Shirt</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.fromWrapper}>
                <div className={styles.from}>from</div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div}>$30</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.cart5Parent}>
          <div className={styles.cart5}>
            <div className={styles.cart51} />
            <img
              className={styles.png5Icon}
              loading="lazy"
              alt=""
              src="/png5@2x.png"
            />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
                <div className={styles.levisJacketParent}>
                  <div className={styles.levisJacket}>Levi’s Jacket</div>
                  <div className={styles.jacketsWrapper}>
                    <div className={styles.jackets}>Jackets</div>
                  </div>
                </div>
              </div>
              <div className={styles.fromParent}>
                <div className={styles.from1}>from</div>
                <div className={styles.div1}>$30</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
