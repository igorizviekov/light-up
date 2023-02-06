import { getClassByCondition } from "@/utils";
import { useState } from "react";
import styles from "./DropDownFilter.module.scss";
import { IDropDownProps } from "./types";

const DropDownFilter: React.FC<IDropDownProps> = ({ items }) => {
  const [value, setValue] = useState("To choose...");
  return (
    <select
      className={[
        styles["drop-down-filter"],
        getClassByCondition(
          value !== "To choose...",
          styles["drop-down-filter_checked"]
        ),
      ].join(" ")}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option className={styles["drop-down-filter__default"]}>
        To choose...
      </option>
      {items.map((e, i) => {
        return <option key={i}>{e}</option>;
      })}
    </select>
  );
};

export default DropDownFilter;
