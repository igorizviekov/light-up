import styles from "./SortButton.module.scss";
import { ISortButtonProps } from "./types";

const SortButton: React.FC<ISortButtonProps> = ({ label }) => {
  return <button className={styles["sort-button"]}>{label}</button>;
};

export default SortButton;
