import { getClassByCondition } from "@/utils";
import { useState } from "react";
import RadioButton from "../RadioButton";
import styles from "./DropDownFilter.module.scss";
import { IDropDownProps } from "./types";

const DropDownFilter: React.FC<IDropDownProps> = ({ items }) => {
  const [selectedValue, setSelectedValue] = useState<number>(-1);
  return (
    <div className={styles["drop-down"]}>
      <div className={styles["drop-down__to-choose"]}>
        <span
          className={[
            styles["drop-down__selected-item"],
            getClassByCondition(
              selectedValue < 0,
              styles["drop-down__selected-item_empty"]
            ),
          ].join(" ")}
        >
          {selectedValue < 0 ? "To choose" : items[selectedValue]}
        </span>
        <img
          src={require("../../assets/arrow-drop-down.png").default.src}
          className={styles["drop-down__icon"]}
        />
      </div>
      <div className={styles["drop-down__items"]}>
        <div className={styles["drop-down__items-wrapper"]}>
          {items.map((e) => {
            return <RadioButton label={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DropDownFilter;
