import { IRangeProps } from "./types";
import styles from "./Range.module.scss";

export const Range: React.FC<IRangeProps> = ({ title }) => {
  return (
    <div className={styles["range"]}>
      <div className={styles["range__title"]}>{title}</div>
      <div className={styles["range__inputs-wrapper"]}>
        <div className={styles["range__input-wrapper"]}>
          <div className={styles["range__input-text"]}>$ min</div>
          <input className={styles["range__input"]} type="number" />
        </div>
        <div className={styles["range__input-wrapper"]}>
          <div className={styles["range__input-text"]}>$ max</div>
          <input className={styles["range__input"]} type="number" />
        </div>
      </div>
    </div>
  );
};
