import { getClassByCondition } from "@/utils";
import styles from "./PaginationButton.module.scss";
import { IPaginationButtonProps } from "./types";

const PaginationButton: React.FC<IPaginationButtonProps> = ({
  label,
  isChecked,
}) => {
  return (
    <button
      className={[
        styles["pagination-button"],
        getClassByCondition(!!isChecked, styles["pagination-button_checked"]),
      ].join(" ")}
    >
      {label}
    </button>
  );
};

export default PaginationButton;
