import React from "react";
import styles from "./ProductCard.module.scss";
import { IProductCardProps } from "./types";

const ProductCard: React.FC<IProductCardProps> = ({
  isNew,
  sale,
  img,
  category,
  title,
}) => {
  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-card__tags-wrapper"]}>
        {isNew ? (
          <div
            className={
              styles["product-card__tag"] +
              " " +
              styles["product-card__tag_new"]
            }
          >
            New
          </div>
        ) : null}
        {sale ? (
          <div
            className={
              styles["product-card__tag"] +
              " " +
              styles["product-card__tag_sale"]
            }
          >
            -{sale}%
          </div>
        ) : null}
      </div>
      <div>
        <img src={img} className={styles["product-card__img"]} />
      </div>
      <div className={styles["product-card__text-wrapper"]}>
        <div className={styles["product-card__category"]}>{category}</div>
        <h5 className={styles["product-card__title"]}>{title}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
