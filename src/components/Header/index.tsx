import DropDown from "../DropDown";
import HeaderLink from "../HeaderLink";
import Menu from "../Menu";
import styles from "./Header.module.scss";
import { BsBag, BsPerson } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import HeaderButton from "../HeaderButton";

const Header = () => {
  const links = [
    { label: "best sellers" },
    { label: "ENGAGEMENT&WEDDING" },
    { label: "JEWELLRY" },
    { label: "GIFT" },
    { label: "NEW BORN" },
    { label: "ABOUT" },
  ];

  const langs = ["UA", "US", "RU"];

  return (
    <header className={styles["header"]}>
      <div className={styles["header__add"]}>
        <h4>Special for you. Best jewellry in the&nbsp;world</h4>
      </div>
      <div className={styles["header__content"]}>
        <main className={styles["header__main"]}>
          <div className={styles["header__languages"]}>
            <DropDown items={langs} />
          </div>
          <Menu />
          <img src={require("../../assets/logo.png").default.src} />
          <div className={styles["header__buttons"]}>
            <HeaderButton>
              <AiOutlineSearch size="100%" color="#939393" />
            </HeaderButton>
            <HeaderButton>
              <BsPerson size="100%" color="#939393" />
            </HeaderButton>
            <HeaderButton>
              <BsBag size="100%" color="#939393" />
            </HeaderButton>
          </div>
        </main>
        <nav className={styles["header__links"]}>
          <ul>
            {links.map((e, i) => {
              return (
                <li key={i}>
                  <HeaderLink label={e.label} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <hr />
    </header>
  );
};

export default Header;
