import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.storeContainerParent, className].join(" ")}>
      <div className={styles.storeContainer}>
        <div className={styles.buylevisStore}>
          <img
            className={styles.buylevisStoreChild}
            alt=""
            src="/rectangle-7.svg"
          />
          <b className={styles.buyLevisTShirts}>Buy Levi’s T-Shirts</b>
          <div className={styles.weFound2}>
            we found 2 offline stire and 3 online stores,
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.offlineStoreWrapper}>
            <div className={styles.offlineStore}>Offline-Store</div>
          </div>
          <img
            className={styles.mapMarkerIcon}
            loading="lazy"
            alt=""
            src="/map-marker@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameDiv}>
              <FrameComponent2 levisOfficialStore="Levi’s Official Store" />
              <div className={styles.btnWrapper}>
                <div className={styles.btn}>
                  <img
                    className={styles.btnChild}
                    alt=""
                    src="/rectangle-10.svg"
                  />
                  <div className={styles.div}>$28</div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameParent1}>
                <div className={styles.frameWrapper1}>
                  <FrameComponent2
                    levisOfficialStore="OutFit Brand Store"
                    propWidth="unset"
                    propAlignSelf="stretch"
                  />
                </div>
                <div className={styles.btnParent}>
                  <div className={styles.btn1}>
                    <img
                      className={styles.btnItem}
                      alt=""
                      src="/rectangle-11.svg"
                    />
                    <div className={styles.div1}>$67</div>
                  </div>
                  <div className={styles.viewAllWrapper}>
                    <a className={styles.viewAll}>View All</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.onlineStoreWrapper}>
            <div className={styles.onlineStore}>Online-Store</div>
          </div>
        </div>
      </div>
      <div className={styles.levisWebsite}>
        <div className={styles.levisWebsiteContainer}>
          <div className={styles.levisWebsiteContainerChild} />
          <div className={styles.websiteInfo}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameInner}
                alt=""
                src="/rectangle-8.svg"
              />
              <img
                className={styles.internetIcon}
                loading="lazy"
                alt=""
                src="/internet@2x.png"
              />
            </div>
            <div className={styles.websiteAddress}>
              <div className={styles.frameParent2}>
                <div className={styles.levisBrandStoreWrapper}>
                  <b className={styles.levisBrandStore}>Levis Brand Store</b>
                </div>
                <div className={styles.wwwlevisstorecom}>
                  www,levisstore.com
                </div>
              </div>
            </div>
          </div>
          <div className={styles.websiteButton}>
            <div className={styles.btn2}>
              <img className={styles.btnInner} alt="" src="/rectangle-10.svg" />
              <div className={styles.div2}>$20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
