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
        <div className={styles["product-card__buy"]}>
          <div className={styles["product-card__buy-icons"]}>
            <img src={require("../../assets/like_v.png").default.src} />
            <img src={require("../../assets/bag_v.png").default.src} />
          </div>
        </div>
      </div>
      <div>
        <div className={styles["product-card__buttons-wrapper"]}>
          <button />
          <button />
        </div>
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
