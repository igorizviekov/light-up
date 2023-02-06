import PaginationButton from "../PaginationButton";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  return (
    <div className={styles["pagination"]}>
      <button className={styles["pagination__switch-button"]}>Previous</button>
      <div className={styles["pagination__buttons"]}>
        <PaginationButton label="1" isChecked={true} />
        <PaginationButton label="2" />
        <PaginationButton label="3" />
        <PaginationButton label="..." />
        <PaginationButton label="10" />
      </div>
      <button className={styles["pagination__switch-button"]}>Next</button>
    </div>
  );
};

export default Pagination;
