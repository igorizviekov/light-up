import styles from "./HeaderLinkLinks.module.scss";
import { IHeaderLinkLinksProps } from "./types";

const HeaderLinkLinks: React.FC<IHeaderLinkLinksProps> = ({ name, links }) => {
  return (
    <div className={styles["links-wrapper"]}>
      <h5 className={styles["links-wrapper__title"]}>{name}</h5>
      {links.map((e) => {
        return <a className={styles["links-wrapper__link"]}>{e}</a>;
      })}
      <button className={styles["links-wrapper__button"]}>SEE ALL {">"}</button>
    </div>
  );
};

export default HeaderLinkLinks;
