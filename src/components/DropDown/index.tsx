import { getClassByCondition } from "@/utils";
import { useEffect, useRef, useState } from "react";
import styles from "./DropDown.module.scss";
import { IDropDownProps } from "./types";

const DropDown: React.FC<IDropDownProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const dropDown = useRef<HTMLDivElement | null>(null);

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
        <span>{items[selectedItem]}</span>
        <img
          src={require("../../assets/arrow_open.png").default.src}
          className={[
            styles["drop-down__image"],
            getClassByCondition(isOpened, styles["drop-down__image_opened"]),
          ].join(" ")}
        />
      </div>
      {isOpened ? (
        <div className={styles["drop-down__items"]}>
          {items.map((e, i) => (
            <div
              className={styles["drop-down__item"]}
              onClick={() => {
                setSelectedItem(i);
                setIsOpened(false);
              }}
            >
              {e}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropDown;
