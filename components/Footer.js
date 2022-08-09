import styles from "../styles/Footer.module.css";
import FooterBgMobile from "../assets/bg-pattern-footer-mobile.svg";
import FooterBgDesktop from "../assets/bg-pattern-footer-desktop.svg";
import Fb from "../assets/icon-facebook.svg";
import Tw from "../assets/icon-twitter.svg";
import Pi from "../assets/icon-pinterest.svg";
import In from "../assets/icon-instagram.svg";
import Logo from "../assets/logo.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          <div className={styles.footer_bg_mobile}>
            <Image src={FooterBgMobile} alt="" layout="fill" />
          </div>
          <div className={styles.footer_bg_desktop}>
            <Image src={FooterBgDesktop} alt="" layout="fill" />
          </div>
          <div className={styles.footer_top_links}>
            <div className={styles.footer_top_logo}>
              <Image src={Logo} alt="logo image" layout="fill" priority />
            </div>
            <div className={styles.footer_top_socialLinks}>
              <div className={styles.footer_top_fb}>
                <Image src={Fb} alt="facebook icon" layout="fill" />
              </div>
              <div className={styles.footer_top_tw}>
                <Image src={Tw} alt="tweeter icon" layout="fill" />
              </div>
              <div className={styles.footer_top_pi}>
                <Image src={Pi} alt="pinterest icon" layout="fill" />
              </div>
              <div className={styles.footer_top_in}>
                <Image src={In} alt="instagram icon" layout="fill" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer_bot}>
          <div className={styles.footer_bot_item}>
            <div className={styles.footer_bot_title}>Our company</div>
            <div className={styles.footer_bot_compagny_link}>How we work</div>
            <div className={styles.footer_bot_compagny_link}>Why Insure?</div>
            <div className={styles.footer_bot_compagny_link}>check price</div>
            <div className={styles.footer_bot_compagny_link}>reviews</div>
          </div>
          <div className={styles.footer_bot_item}>
            <div className={styles.footer_bot_title}>help me</div>
            <div className={styles.footer_bot_compagny_link}>FAQ</div>
            <div className={styles.footer_bot_compagny_link}>Terms of use</div>
            <div className={styles.footer_bot_compagny_link}>
              Privacy policy
            </div>
            <div className={styles.footer_bot_compagny_link}>Cookies</div>
          </div>
          <div className={styles.footer_bot_item}>
            <div className={styles.footer_bot_title}>Contact</div>
            <div className={styles.footer_bot_compagny_link}>Sales</div>
            <div className={styles.footer_bot_compagny_link}>Support</div>
            <div className={styles.footer_bot_compagny_link}>Live chat</div>
          </div>
          <div className={styles.footer_bot_item}>
            <div className={styles.footer_bot_title}>Others</div>
            <div className={styles.footer_bot_compagny_link}>Careers</div>
            <div className={styles.footer_bot_compagny_link}>Press</div>
            <div className={styles.footer_bot_compagny_link}>Licenses</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
