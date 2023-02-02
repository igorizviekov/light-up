import styles from "./MenuButton.module.scss";
import { IHeaderButtonProps } from "./types";

const HeaderButton: React.FC<IHeaderButtonProps> = ({ children }) => {
  return <button className={styles["header-button"]}>{children}</button>;
};

export default HeaderButton;
