import DropDown from "../DropDown";
import HeaderLink from "../HeaderLink";
import Menu from "../Menu";
import MenuButton from "../HeaderButton";
import styles from "./Header.module.scss";

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
          <img alt="logo" src={require("../../assets/logo.png").default.src} />
          <div className={styles["header__buttons"]}>
            <MenuButton img={require("../../assets/search.png").default.src} />
            <MenuButton img={require("../../assets/profile.png").default.src} />
            <MenuButton img={require("../../assets/bag.png").default.src} />
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
