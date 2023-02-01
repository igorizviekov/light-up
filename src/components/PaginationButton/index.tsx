import styles from "./PaginationButton.module.scss";
import { IPaginationButtonProps } from "./types";

const PaginationButton: React.FC<IPaginationButtonProps> = ({
  label,
  isChecked,
}) => {
  return (
    <button
      className={
        styles["pagination-button"] +
        " " +
        (isChecked ? styles["pagination-button_checked"] : "")
      }
    >
      {label}
    </button>
  );
};

export default PaginationButton;
