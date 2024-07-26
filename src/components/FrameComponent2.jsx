import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({
  className = "",
  levisOfficialStore,
  propWidth,
  propAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-8.svg" />
        <img
          className={styles.onlineStoreIcon}
          loading="lazy"
          alt=""
          src="/online-store@2x.png"
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.levisOfficialStoreWrapper}>
            <b className={styles.levisOfficialStore}>{levisOfficialStore}</b>
          </div>
          <div className={styles.brandSt}>
            7 Brand st , Bangalure-white field
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  levisOfficialStore: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent2;
