import { IRadioButtonProps } from "./types";
import styles from "./RadioButton.module.scss";

const RadioButton: React.FC<IRadioButtonProps> = ({ label, ...rest }) => {
  return (
    <div className={styles["radio"]}>
      <input type="radio" className={styles["radio__button"]} {...rest} />
      <label className={styles["radio__label"]}>
        <span>{label}</span>
      </label>
    </div>
  );
};

export default RadioButton;
