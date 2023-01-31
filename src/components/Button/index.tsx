import styles from "./Button.module.scss";
import { IButtonProps } from "./type";
export const Button: React.FC<IButtonProps> = ({ type, children }) => {
  return (
    <button
      className={
        styles["button"] +
        " " +
        (type === "secondary" ? styles["button_secondary"] : "")
      }
    >
      {children}
    </button>
  );
};
