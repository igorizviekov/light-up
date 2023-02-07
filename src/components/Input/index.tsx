import styles from "./Input.module.scss";

const Input: React.FC<React.ComponentPropsWithoutRef<"input">> = ({
  ...rest
}) => <input className={styles["input"]} {...rest} />;

export default Input;
