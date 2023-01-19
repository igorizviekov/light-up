import styles from "./MenuButton.module.scss";
import { IHeaderButtonProps } from "./types";

const HeaderButton: React.FC<IHeaderButtonProps> = ({ img }) => {
  return (
    <button
      className={styles["header-button"]}
      style={{ background: `url(${img})` }}
    ></button>
  );
};

export default HeaderButton;
