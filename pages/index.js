import Head from "next/head";
import Image from "next/image";
import Intro from "../assets/image-intro-desktop.jpg";
import BgIntroMobileLeft from "../assets/bg-pattern-intro-left-mobile.svg";
import BgIntroDesktopLeft from "../assets/bg-pattern-intro-left-desktop.svg";
import BgIntroMobileRight from "../assets/bg-pattern-intro-right-mobile.svg";
import BgIntroDesktopRight from "../assets/bg-pattern-intro-right-desktop.svg";
import Snappy from "../assets/icon-snappy-process.svg";
import Affordable from "../assets/icon-affordable-prices.svg";
import People from "../assets/icon-people-first.svg";
import WorkBgMobile from "../assets/bg-pattern-how-we-work-mobile.svg";
import WorkBgDesktop from "../assets/bg-pattern-how-we-work-desktop.svg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.intro_container}>
          <div className={styles.intro_image_wrapper}>
            <Image
              src={Intro}
              alt="intro image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className={styles.intro_bg_mobile_left}>
            <Image src={BgIntroMobileLeft} alt="" layout="fixed" />
          </div>
          <div className={styles.intro_bg_desktop_left}>
            <Image src={BgIntroDesktopLeft} alt="" layout="fixed" />
          </div>
          <div className={styles.intro_bg_mobile_right}>
            <Image src={BgIntroMobileRight} alt="" layout="fixed" />
          </div>
          <div className={styles.intro_bg_desktop_right}>
            <Image
              src={BgIntroDesktopRight}
              alt=""
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div className={styles.intro_body}>
            <div className={styles.intro_body_title}>
              Humanizing your insurance.
            </div>
            <p className={styles.intro_body_text}>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <button className={styles.intro_body_btn}>View plans</button>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.section2_line}></div>
        <div className={styles.section2_title}>We&#39;re different</div>
        <div className={styles.section2_proposal}>
          <div className={styles.section2_proposal_item}>
            <div className={styles.section2_proposal_item_img}>
              <Image src={Snappy} alt="snappy  image" layout="fill" />
            </div>
            <div className={styles.section2_proposal_item_title}>
              Snappy Process
            </div>
            <p className={styles.section2_proposal_item_text}>
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </div>
          <div className={styles.section2_proposal_item}>
            <div className={styles.section2_proposal_item_img}>
              <Image src={Affordable} alt="Affordable image" layout="fill" />
            </div>
            <div className={styles.section2_proposal_item_title}>
              Affordable Prices
            </div>
            <p className={styles.section2_proposal_item_text}>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className={styles.section2_proposal_item}>
            <div className={styles.section2_proposal_item_img}>
              <Image src={People} alt="people image" layout="fill" />
            </div>
            <div className={styles.section2_proposal_item_title}>
              People First
            </div>
            <p className={styles.section2_proposal_item_text}>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.c2a}>
        <div className={styles.c2a_img_wrapper_mobile}>
          <Image src={WorkBgMobile} alt="" layout="fill" />
        </div>
        <div className={styles.c2a_img_wrapper_desktop}>
          <Image src={WorkBgDesktop} alt="" layout="fixed" />
        </div>
        <div className={styles.c2a_info}>
          <div className={styles.c2a_title}>
            Find out more about how we work
          </div>
          <button className={styles.c2a_btn}>How we work</button>
        </div>
      </section>
    </main>
  );
}
