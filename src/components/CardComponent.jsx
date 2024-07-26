import PropTypes from "prop-types";
import styles from "./CardComponent.module.css";
import Button from 'react-bootstrap/Button';

const CardComponent = ({ className = "" }) => {
  return (
    <div className={[styles.cardcomponent, className].join(" ")}>
      <div className={styles.cardcomponentChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.pngIcon}
          loading="lazy"
          alt=""
          src="/png@2x.png"
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.loveCircledWrapper}>
          <img
            className={styles.loveCircledIcon}
            loading="lazy"
            alt=""
            src="/love-circled@2x.png"
          />
        </div>
        <div className={styles.productTitle}>
          <div className={styles.levisTShirtsWrapper}>
            <h3 className={styles.levisTShirts}>Levi’s - T-Shirts</h3>
          </div>
          <div className={styles.tshirtType}>
            <div className={styles.from30}>From :$30 / T-Shirts</div>
          </div>
          <div className={styles.productTitleInner}>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.starRating}>
            <div className={styles.ratingContent}>
              <div className={styles.starContainer}>
                <div className={styles.ratingWrapper}>
                  <div className={styles.rating}>rating:</div>
                </div>
                <div className={styles.stars}>
                  <img
                    className={styles.starFilledIcon}
                    loading="lazy"
                    alt=""
                    src="/star-filled@2x.png"
                  />
                </div>
                <div className={styles.stars1}>
                  <img
                    className={styles.starFilledIcon1}
                    alt=""
                    src="/star-filled@2x.png"
                  />
                </div>
                <img
                  className={styles.starFilledIcon2}
                  alt=""
                  src="/star-filled@2x.png"
                />
              </div>
              <div className={styles.buyBtnWrapper}>
              <div>
        <Button variant="primary" size="mb">
          Buy
        </Button>{' '}
        <Button variant="secondary" size="mb">
          Addcart
        </Button>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  className: PropTypes.string,
};

export default CardComponent;
