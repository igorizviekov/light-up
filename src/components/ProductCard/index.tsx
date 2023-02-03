import React from "react";
import styles from "./ProductCard.module.scss";
import { IProductCardProps } from "./types";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag, BsArrowRightCircle } from "react-icons/bs";

const ProductCard: React.FC<IProductCardProps> = ({
  isNew,
  sale,
  img,
  category,
  title,
  price,
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
            <AiOutlineHeart
              size="25px"
              className={styles["product-card__buy-icons-button"]}
            />
            <BsBag
              size="20px"
              className={styles["product-card__buy-icons-button"]}
            />
          </div>
        </div>
      </div>
      <div>
        <div className={styles["product-card__buttons-wrapper"]}>
          <button className={styles["product-card__button"]}>
            <BsArrowRightCircle size="25px" />
          </button>
          <button className={styles["product-card__button"]}>
            <BsArrowRightCircle size="25px" />
          </button>
        </div>
        <img src={img} className={styles["product-card__img"]} />
      </div>
      <div className={styles["product-card__text-wrapper"]}>
        <div className={styles["product-card__price"]}>{price}$</div>
        <div className={styles["product-card__data-wrapper"]}>
          <div className={styles["product-card__category"]}>{category}</div>
          <h5 className={styles["product-card__title"]}>{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
