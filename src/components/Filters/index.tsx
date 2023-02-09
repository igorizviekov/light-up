import { useEffect, useRef, useState } from "react";
import DropDownFilter from "../DropDownFilter";
import RadioButton from "../RadioButton";
import { Range } from "../Range";
import SortButton from "../SortButton";
import styles from "./Filters.module.scss";
import { getClassByCondition } from "@/utils";
import React from "react";
import FilterLabel from "../FilterLabel";

const Filters = () => {
  const [isSortOpened, setIsSortOpened] = useState<boolean>(false);
  const [isFilterOpened, setIsFilterOpened] = useState<boolean>(false);

  const sortRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const filterContentRef = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);

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

  const closeSort = (e: Event) => {
    if (
      !sortRef.current?.contains(e.target as Document) &&
      !wrapper.current?.contains(e.target as Document)
    ) {
      setIsSortOpened(false);
    }
  };

  const closeFilter = (e: Event) => {
    if (
      !filterRef.current?.contains(e.target as Document) &&
      !filterContentRef.current?.contains(e.target as Document) &&
      !wrapper.current?.contains(e.target as Document)
    ) {
      setIsFilterOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSort);
    document.addEventListener("click", closeFilter);

    return () => {
      document.removeEventListener("click", closeSort);
      document.removeEventListener("click", closeFilter);
    };
  }, []);

  return (
    <>
      <div className={styles["filters-wrapper"]} ref={wrapper}>
        <div className={styles["filters-wrapper__item"]} ref={filterRef}>
          <button
            onClick={() => setIsFilterOpened((prev) => !prev)}
            className={[
              styles["filters-wrapper__text-wrapper"],
              getClassByCondition(
                isFilterOpened,
                styles["filters-wrapper__text-wrapper_opened"]
              ),
            ].join(" ")}
          >
            <div className={styles["filters-wrapper__text"]}>Filter</div>
            <img
              src={
                isFilterOpened
                  ? require("../../assets/filter_v.png").default.src
                  : require("../../assets/filter.png").default.src
              }
            />
          </button>
        </div>
        <div className={styles["filters-wrapper__separator"]}>
          {isFilterOpened ? (
            <div className={styles["filters-wrapper__separator-content"]}>
              <div
                className={styles["filters-wrapper__separator-content-filters"]}
              >
                <FilterLabel title="rerere" />
                <FilterLabel title="rerere" />
                <FilterLabel title="rerere" />
                <FilterLabel title="rerere" />
                <FilterLabel title="rerere" />
                <FilterLabel title="rerere" />
                <FilterLabel title="rerere" />
              </div>
              <button className={styles["filters-wrapper__reset-filters"]}>
                reset
              </button>
            </div>
          ) : null}
        </div>
        <div className={styles["filters-wrapper__item"]} ref={sortRef}>
          <button
            onClick={() => setIsSortOpened((prev) => !prev)}
            className={[
              styles["filters-wrapper__text-wrapper"],
              getClassByCondition(
                isSortOpened,
                styles["filters-wrapper__text-wrapper_opened"]
              ),
            ].join(" ")}
          >
            <div className={styles["filters-wrapper__text"]}>Sort</div>
            {isSortOpened ? (
              <img src={require("../../assets/minus_v.png").default.src} />
            ) : (
              <img src={require("../../assets/plus.png").default.src} />
            )}
          </button>

          <div
            className={[
              styles["filters-wrapper__sort"],
              getClassByCondition(
                isSortOpened,
                styles["filters-wrapper__sort_opened"]
              ),
            ].join(" ")}
          >
            <SortButton label="Variant fweer" />
            <SortButton label="Variant fweer" />
            <SortButton label="Variant fweer" />
            <SortButton label="Variant fweer" />
            <SortButton label="Variant fweer" />
            <SortButton label="Variant fweer" />
          </div>
        </div>
      </div>

      <div
        ref={filterContentRef}
        className={[
          styles["filters-wrapper__filter"],
          getClassByCondition(
            isFilterOpened,
            styles["filters-wrapper__filter_opened"]
          ),
        ].join(" ")}
      >
        <div
          className={
            styles["filters-wrapper__separator-content-filters-mobile"]
          }
        >
          <FilterLabel title="rerere" />
          <FilterLabel title="rerere" />

          <FilterLabel title="rerere" />
          <FilterLabel title="rerere" />
        </div>
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
            <div className={styles["filters-wrapper__column-items-wrapper"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                CATEGORIES
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div className={styles["filters-wrapper__column-items-wrapper"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                type of gem
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div className={styles["filters-wrapper__column-items-wrapper"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                Probe
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
            <div className={styles["filters-wrapper__column-items-wrapper"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                gender
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
          </div>
          <div className={styles["filters-wrapper__column"]}>
            <div className={styles["filters-wrapper__column-items-wrapper"]}>
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
              </div>
            </div>
            <div className={styles["filters-wrapper__column-items-wrapper"]}>
              <div className={styles["filters-wrapper__category-title"]}>
                sizes
              </div>
              <DropDownFilter items={["ervevr", "ff34f3", "qwwqdqdwqw"]} />
            </div>
          </div>
          <div className={styles["filters-wrapper__column"]}>
            <div className={styles["filters-wrapper__column-items-wrapper"]}>
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
            <div className={styles["filters-wrapper__column-items-wrapper"]}>
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

export default React.memo(Filters);
