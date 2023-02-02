import { useEffect, useState } from "react";
import DropDownFilter from "../DropDownFilter";
import RadioButton from "../RadioButton";
import { Range } from "../Range";
import styles from "./Filters.module.scss";

const Filters = () => {
  const [isSortOpened, setIsSortOpened] = useState<boolean>(false);
  const [isFilterOpened, setIsFilterOpened] = useState<boolean>(false);

  useEffect(() => {
    if (isSortOpened) {
      setIsFilterOpened(false);
    }
  }, [isSortOpened]);

  useEffect(() => {
    if (isFilterOpened) {
      setIsSortOpened(false);
    }
  }, [isFilterOpened]);

  return (
    <>
      <div className={styles["filters-wrapper"]}>
        <div className={styles["filters-wrapper__item"]}>
          <div
            className={styles["filters-wrapper__text-wrapper"]}
            onClick={() => setIsFilterOpened((prev) => !prev)}
          >
            <div className={styles["filters-wrapper__text"]}>Filter</div>
            <img src={require("../../assets/filter.png").default.src} />
          </div>
        </div>
        <div className={styles["filters-wrapper__separator"]} />
        <div id="sort" className={styles["filters-wrapper__item"]}>
          <div
            className={styles["filters-wrapper__text-wrapper"]}
            onClick={() => setIsSortOpened((prev) => !prev)}
          >
            <div className={styles["filters-wrapper__text"]}>Sort</div>
            <img src={require("../../assets/plus.png").default.src} />
          </div>

          <div
            className={
              styles["filters-wrapper__sort"] +
              " " +
              (isSortOpened ? styles["filters-wrapper__sort_opened"] : "")
            }
          >
            <RadioButton label="button" />
            <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            <Range title="geerg" />
          </div>
        </div>
      </div>

      <div
        id="filter"
        className={
          styles["filters-wrapper__filter"] +
          " " +
          (isFilterOpened ? styles["filters-wrapper__filter_opened"] : "")
        }
      ></div>
    </>
  );
};

export default Filters;
