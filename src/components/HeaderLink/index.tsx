import React from "react";
import { IHeaderLinkProps } from "./types";
import styles from "./HeaderLink.module.scss";
import HeaderLinkLinks from "../HeaderLinkLinks";

const HeaderLink: React.FC<IHeaderLinkProps> = ({ label }) => {
  const links1 = {
    name: "FOR HER",
    links: ["RINGS", "HAIRPINS", "PENDANTS", "ENGAGEMENT RINGS", "EARRING"],
  };

  const links2 = {
    name: "FOR HIM",
    links: ["CHAINS", "CUFFLINKS", "BEARDED", "BRACELETS", "BELTS"],
  };

  const links3 = {
    name: "OTHER",
    links: ["UNIQUE CANDLES", "KIMA TOYS", "NAMES"],
  };
  return (
    <div className={styles["header-link"]}>
      <div className={styles["header-link__text"]}>
        <a className={styles["header-link__link"]}>{label}</a>
      </div>
      <div className={styles["header-link__info"]}>
        <hr className={styles["header-link__line"]} />
        <div className={styles["header-link__wrapper"]}>
          <div className={styles["header-link__links"]}>
            <HeaderLinkLinks {...links1} />
            <HeaderLinkLinks {...links2} />
            <HeaderLinkLinks {...links3} />
          </div>
          <img
            src={require("../../assets/product.png").default.src}
            className={styles["header-link__img"]}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderLink;
