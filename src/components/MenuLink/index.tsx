import styles from "./MenuLink.module.scss";
import { IMenuLinkProps } from "./types";

const MenuLink: React.FC<IMenuLinkProps> = ({ title }) => {
  return <button className={styles["menu-link"]}>{title}</button>;
};

export default MenuLink;
