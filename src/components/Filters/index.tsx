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
        <div className={styles["filters-wrapper__item"]}>
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
          ></div>
        </div>
      </div>

      <div
        className={
          styles["filters-wrapper__filter"] +
          " " +
          (isFilterOpened ? styles["filters-wrapper__filter_opened"] : "")
        }
      >
        <div className={styles["filters-wrapper__filter-content-wide"]}>
          <div className={styles["filters-wrapper__column"]}>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                CATEGORIES
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                MATERIALS
              </div>
              <div className={styles["filters-wrapper__category-wrapper"]}>
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
              </div>
            </div>
          </div>
          <div className={styles["filters-wrapper__column"]}>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                Probe
              </div>
              <div className={styles["filters-wrapper__category-wrapper"]}>
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
              </div>
            </div>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                gender
              </div>
              <div className={styles["filters-wrapper__category-wrapper"]}>
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles["filters-wrapper__column"]}>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                type of gem
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                sizes
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
          </div>
          <div className={styles["filters-wrapper__column"]}>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                prices
              </div>
              <div className={styles["filters-wrapper__category-wrapper"]}>
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
              </div>
            </div>
            <div>
              <Range title="Or set your custom price range" />
            </div>
          </div>
        </div>

        <div className={styles["filters-wrapper__filter-content-tablet"]}>
          <div className={styles["filters-wrapper__column"]}>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                CATEGORIES
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                type of gem
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                Probe
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                gender
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
          </div>
          <div className={styles["filters-wrapper__column"]}>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                MATERIALS
              </div>
              <div className={styles["filters-wrapper__category-wrapper"]}>
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
              </div>
            </div>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                sizes
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
          </div>
          <div className={styles["filters-wrapper__column"]}>
            <div>
              <div className={styles["filters-wrapper__category-title"]}>
                prices
              </div>
              <div className={styles["filters-wrapper__category-wrapper"]}>
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
                <RadioButton label="button" />
              </div>
            </div>
            <div>
              <Range title="Or set your custom price range" />
            </div>
          </div>
        </div>

        <div className={styles["filters-wrapper__filter-content-mobile"]}>
          <div className={styles["filters-wrapper__column"]}>
            <div className={styles["filters-wrapper__row"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                MATERIALS
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div className={styles["filters-wrapper__row"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                MATERIALS
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div className={styles["filters-wrapper__row"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                MATERIALS
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div className={styles["filters-wrapper__row"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                MATERIALS
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div className={styles["filters-wrapper__row"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                MATERIALS
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div className={styles["filters-wrapper__row"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                MATERIALS
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div className={styles["filters-wrapper__row"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                MATERIALS
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div className={styles["filters-wrapper__row"]}>
              <Range title="Or set your custom price range" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
