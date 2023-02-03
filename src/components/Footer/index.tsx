import Button from "../Button";
import Input from "../Input";
import styles from "./Footer.module.scss";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__columns-wrapper"]}>
        <div className={styles["footer__column"]}>
          <h4 className={styles["footer__column-title"]}>About vera&paul</h4>
          <div className={styles["footer__text"]}>
            Vera & Paul is all about revealing your hidden side. What do we mean
            by 'hidden side'? We mean the buried treasure. The gold in the dark.
            The true you. Because the true you is truly beautiful, and we want
            to help you show it.
          </div>
          <div className={styles["footer__text"]}>
            So reveal your hidden side, with Vera & Paul
          </div>
          <div>
            <FiFacebook size="14px" color="#939393" />
            <AiOutlineInstagram size="14px" color="#939393" />
          </div>
        </div>
        <div className={styles["footer__column"]}>
          <h4 className={styles["footer__column-title"]}>Customer Service</h4>
          <a href="#" className={styles["footer__link"]}>
            FAQ
          </a>
          <a href="#" className={styles["footer__link"]}>
            Delivery
          </a>
          <a href="#" className={styles["footer__link"]}>
            Exchanges & Returns
          </a>
          <a href="#" className={styles["footer__link"]}>
            Contact Us
          </a>
          <a href="#" className={styles["footer__link"]}>
            Terms of Service
          </a>
        </div>
        <div className={styles["footer__column"]}>
          <h4 className={styles["footer__column-title"]}>Other Info</h4>
          <a href="#" className={styles["footer__link"]}>
            Copyright & Trademark
          </a>
          <a href="#" className={styles["footer__link"]}>
            Terms & Conditions
          </a>
          <a href="#" className={styles["footer__link"]}>
            Privacy Policy
          </a>
          <a href="#" className={styles["footer__link"]}>
            Cookie Policy
          </a>
        </div>
        <div className={styles["footer__column"]}>
          <h4 className={styles["footer__column-title"]}>Newsletter</h4>
          <div className={styles["footer__text"]}>
            Subscribe to receive updates, access to exclusive deals, and more.
          </div>
          <Input />
          <Button type="primary">subscribe</Button>
        </div>
      </div>
      <div className={styles["footer__bottom"]}>
        <div className={styles["footer__rights"]}>
          © 2022. VP Exclusive Inc. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
