import Image from "next/image";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";
import MobileNavPattern from "../assets/bg-pattern-mobile-nav.svg";
import Link from "next/link";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src={Logo} alt="logo image" layout="fill" priority />
      </div>

      <input className={styles.nav_input} type="checkbox" id="toggle" />
      <label htmlFor="toggle">
        <div className={styles.menuBtn}>
          <div className={styles.openBtn}>
            <Image src={Hamburger} alt="menu icon" layout="fill" />
          </div>
          <div className={styles.closeBtn}>
            <Image src={Close} alt="close icon" layout="fill" />
          </div>
        </div>
      </label>

      <div className={styles.nav_list}>
        <div className={styles.nav_items_wrapper}>
          <div className={styles.nav_item}>
            <div className={styles.nav_link}>
              <Link href="">
                <a>HOW WE WORK</a>
              </Link>
            </div>
          </div>
          <div className={styles.nav_item}>
            <div className={styles.nav_link}>
              <Link href="">
                <a>BLOG</a>
              </Link>
            </div>
          </div>
          <div className={styles.nav_item}>
            <div className={styles.nav_link}>
              <Link href="">
                <a>ACCOUNT</a>
              </Link>
            </div>
          </div>
          <div className={styles.nav_item}>
            <div className={styles.nav_link + " " + styles.nav_item_ca}>
              <Link href="">
                <a>VIEW PLANS</a>
              </Link>
            </div>
          </div>
          <div className={styles.nav_list_bg}>
            <Image
              src={MobileNavPattern}
              alt=""
              layout="responsive"
              width={375}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
