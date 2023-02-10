import { IFilterLabelProps } from "./types";
import styles from "./FilterLabel.module.scss";

const FilterLabel: React.FC<IFilterLabelProps> = ({ title }) => {
  return (
    <button className={styles["filter-label"]}>
      <img
        src={require("../../assets/plus.png").default.src}
        className={styles["filter-label__icon"]}
      />
      <span className={styles["filter-label__title"]}>{title}</span>
    </button>
  );
};

export default FilterLabel;
