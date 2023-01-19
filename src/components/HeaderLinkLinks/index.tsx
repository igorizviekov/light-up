import styles from "./HeaderLinkLinks.module.scss";
import { IHeaderLinkLinksProps } from "./types";

const HeaderLinkLinks: React.FC<IHeaderLinkLinksProps> = ({ name, links }) => {
  return (
    <div className={styles["links-wrapper"]}>
      <h5>{name}</h5>
      {links.map((e) => {
        return <a>{e}</a>;
      })}
      <button>SEE ALL {">"}</button>
    </div>
  );
};

export default HeaderLinkLinks;
