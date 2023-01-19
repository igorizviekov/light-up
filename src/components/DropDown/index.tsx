import styles from "./DropDown.module.scss";
import { IDropDownProps } from "./types";
const DropDown: React.FC<IDropDownProps> = ({ items }) => {
  return (
    <select className={styles["drop-down"]}>
      {items.map((e, i) => {
        return <option key={i}>{e}</option>;
      })}
    </select>
  );
};

export default DropDown;
