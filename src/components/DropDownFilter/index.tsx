import { getClassByCondition } from "@/utils";
import { useEffect, useRef, useState } from "react";
import RadioButton from "../RadioButton";
import styles from "./DropDownFilter.module.scss";
import { IDropDownProps } from "./types";

const DropDownFilter: React.FC<IDropDownProps> = ({ items }) => {
  const dropDown = useRef<HTMLDivElement | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const closeDropDown = (e: Event) => {
    if (!dropDown.current?.contains(e.target as Document)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropDown);

    return () => {
      document.removeEventListener("click", closeDropDown);
    };
  }, []);

  return (
    <div className={styles["drop-down"]} ref={dropDown}>
      <div
        className={styles["drop-down__to-choose"]}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <span
          className={[
            styles["drop-down__selected-item"],
            styles["drop-down__selected-item_empty"],
          ].join(" ")}
        >
          {"To choose"}
        </span>
        <img
          src={require("../../assets/arrow-drop-down.png").default.src}
          className={styles["drop-down__icon"]}
        />
      </div>
      {isOpened ? (
        <div className={styles["drop-down__items"]}>
          <div className={styles["drop-down__items-wrapper"]}>
            {items.map((e) => {
              return <RadioButton label={e} />;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DropDownFilter;
