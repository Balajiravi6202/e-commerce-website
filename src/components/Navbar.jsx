import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({
  className = "",
  rectangleHeaderRowGap,
  rectangleHeaderHeight,
  rectangleHeaderTop,
  rectangleHeaderPosition,
  onAboutTextClick,
}) => {
  const navbarStyle = useMemo(() => {
    return {
      rowGap: rectangleHeaderRowGap,
      height: rectangleHeaderHeight,
      top: rectangleHeaderTop,
      position: rectangleHeaderPosition,
    };
  }, [
    rectangleHeaderRowGap,
    rectangleHeaderHeight,
    rectangleHeaderTop,
    rectangleHeaderPosition,
  ]);

  return (
    <div className={[styles.navbar, className].join(" ")} style={navbarStyle}>
      <header className={styles.navbarChild} />
      <div className={styles.levisWrapper}>
        <img
          className={styles.levisIcon}
          loading="lazy"
          alt=""
          src="/levis@2x.png"
        />
      </div>
      <div className={styles.aboutProductsTitleWrapper}>
        <div className={styles.aboutProductsTitle}>
          <a className={styles.about} onClick={onAboutTextClick}>
            About
          </a>
          <a className={styles.products}>Products</a>
        </div>
      </div>
      <div className={styles.categoryWrapper}>
        <a className={styles.category}>Category</a>
      </div>
      <div className={styles.todayDealWrapper}>
        <a className={styles.todayDeal}>Today-Deal</a>
      </div>
      <div className={styles.notificationWrapper}>
        <img
          className={styles.notificationIcon}
          loading="lazy"
          alt=""
          src="/notification@2x.png"
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  rectangleHeaderRowGap: PropTypes.any,
  rectangleHeaderHeight: PropTypes.any,
  rectangleHeaderTop: PropTypes.any,
  rectangleHeaderPosition: PropTypes.any,

  /** Action props */
  onAboutTextClick: PropTypes.func,
};

export default Navbar;
