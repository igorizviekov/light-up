import styles from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className={styles["filters-wrapper"]}>
      <div className={styles["filters-wrapper__item"]}>
        <div className={styles["filters-wrapper__text-wrapper"]}>
          <div className={styles["filters-wrapper__text"]}>Filter</div>
          <img src={require("../../assets/filter.png").default.src} />
        </div>
      </div>
      <div className={styles["filters-wrapper__separator"]} />
      <div className={styles["filters-wrapper__item"]}>
        <div className={styles["filters-wrapper__text-wrapper"]}>
          <div className={styles["filters-wrapper__text"]}>Sort</div>
          <img src={require("../../assets/plus.png").default.src} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
