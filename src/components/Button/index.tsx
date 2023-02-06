import { getClassByCondition } from "@/utils";
import styles from "./Button.module.scss";
import { IButtonProps } from "./type";
const Button: React.FC<IButtonProps> = ({ type, children }) => {
  return (
    <button
      className={[
        styles["button"],
        getClassByCondition(type === "secondary", styles["button_secondary"]),
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
