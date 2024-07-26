import Navbar from "../components/Navbar";
import FrameComponent from "../components/FrameComponent";
import styles from "./HomePage.module.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';


const HomePage = () => {


  const navigate = useNavigate();

  const onCartClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <Navbar />
      <main className={styles.content}>
        <section className={styles.productGrid}>
          <div className={styles.productRow}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.cart4Parent}>
                  <div className={styles.cart4} />
                  <img
                    className={styles.png4Icon}
                    loading="lazy"
                    alt=""
                    src="/png4@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.levisTShirtParent}>
                  <div className={styles.levisTShirt}>Levi’s T-Shirt</div>
                  <div className={styles.tShirt}>T-Shirt</div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.fromWrapper}>
                    <div className={styles.from}>from</div>
                  </div>
                  <div className={styles.div}>$30</div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.cart8Wrapper}>
                <div className={styles.cart8}>
                  <img className={styles.cart8Icon} alt="" src="/cart8.svg" />
                  <img
                    className={styles.png8Icon}
                    loading="lazy"
                    alt=""
                    src="/png8@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.levisHoodieParent}>
                  <div className={styles.levisHoodie}>Levi’s Hoodie</div>
                  <div className={styles.tShirt1}>T-Shirt</div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.fromContainer}>
                    <div className={styles.from1}>from</div>
                  </div>
                  <div className={styles.div1}>$30</div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent />
          <div className={styles.footer}>
          
          <Form.Control size="lg" type="text" placeholder="Search Product" />
          
            <div className={styles.recommendationGrid}>
              <div className={styles.recommendationGridInner}>
                <div className={styles.frameParent3}>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.cart2Parent} onClick={onCartClick}>
                        <div className={styles.cart2} />
                        <img
                          className={styles.png2Icon}
                          loading="lazy"
                          alt=""
                          src="/png2@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.frameParent5}>
                      <div className={styles.frameParent6}>
                        <div className={styles.adidasOriginalWrapper}>
                          <div className={styles.adidasOriginal}>
                            Adidas Original
                          </div>
                        </div>
                        <div className={styles.shoes}>Shoes</div>
                      </div>
                      <div className={styles.frameParent7}>
                        <div className={styles.fromFrame}>
                          <div className={styles.from2}>from</div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.div2}>$300</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.imageProduct}>
                    <div className={styles.container}>
                      <div className={styles.background}>
                        <div className={styles.cart3} />
                        <img
                          className={styles.png3Icon}
                          loading="lazy"
                          alt=""
                          src="/png3@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.details}>
                        <div className={styles.palmAngels}>Palm Angels</div>
                        <div className={styles.type}>
                          <div className={styles.jackets}>Jackets</div>
                        </div>
                      </div>
                      <div className={styles.price}>
                        <div className={styles.from3}>
                          <div className={styles.from4}>from</div>
                        </div>
                        <div className={styles.value}>
                          <div className={styles.amount}>$307</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer1}>
                <div className={styles.action}>
                  <div className={styles.item}>
                    <div className={styles.cart6}>
                      <div className={styles.icon}>
                        <img
                          className={styles.cart6Icon}
                          alt=""
                          src="/cart6.svg"
                        />
                        <img
                          className={styles.png6Icon}
                          alt=""
                          src="/png6@2x.png"
                        />
                        <img
                          className={styles.saleIcon}
                          loading="lazy"
                          alt=""
                          src="/sale-1@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.cart7}>
                      <img
                        className={styles.cart7Icon}
                        alt=""
                        src="/cart8.svg"
                      />
                      <img
                        className={styles.png7Icon}
                        loading="lazy"
                        alt=""
                        src="/png7@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.brandProduct}>
                    <div className={styles.combinedName}>
                      <div className={styles.name}>
                        <div className={styles.adidasOriginal1}>
                          Adidas Original
                        </div>
                      </div>
                      <div className={styles.from5}>from</div>
                      <div className={styles.name1}>
                        <div className={styles.levisTShirt1}>
                          Levi’s T-Shirt
                        </div>
                      </div>
                      <div className={styles.from6}>from</div>
                    </div>
                  </div>
                  <div className={styles.categoryAndPrice}>
                    <div className={styles.shoesCategory}>
                      <div className={styles.shoes1}>Shoes</div>
                    </div>
                    <div className={styles.amountShoes}>$300</div>
                    <div className={styles.shirtCategory}>
                      <div className={styles.tShirt2}>T-Shirt</div>
                    </div>
                    <div className={styles.amountShirt}>
                      <div className={styles.valueShirt}>$30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
