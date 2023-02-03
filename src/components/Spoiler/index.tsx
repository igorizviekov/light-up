import { ISpoilerProps } from "./types";
import styles from "./Spoiler.module.scss";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const Spoiler: React.FC<ISpoilerProps> = ({ label, children }) => {
  const [closedChildren, setClosedChildren] = useState<number[]>([]);
  const [isMenuClosed, setIsMenuClosed] = useState<boolean>(true);

  const setClosedChild = (index: number) => {
    console.log(index);
    if (closedChildren.indexOf(index) >= 0) {
      setClosedChildren((prev) => [...prev.filter((e) => e !== index)]);
    } else {
      setClosedChildren((prev) => [...prev, index]);
    }
  };

  return (
    <div className={styles["spoiler-wrapper"]}>
      <div
        className={styles["spoiler-wrapper__label"]}
        onClick={() => setIsMenuClosed((prev) => !prev)}
      >
        {label}{" "}
        {children ? (
          isMenuClosed ? (
            <AiOutlinePlus />
          ) : (
            <AiOutlineMinus />
          )
        ) : null}
      </div>
      <div
        className={[
          styles["spoiler-wrapper__children"],
          isMenuClosed && styles["spoiler-wrapper__children_closed"],
        ].join(" ")}
      >
        {children &&
          children.map((e, i) => {
            return (
              <div className={styles["spoiler-wrapper__children-item"]}>
                <div
                  className={styles["spoiler-wrapper__children-item-label"]}
                  onClick={() => setClosedChild(i)}
                >
                  {e.label}
                  {e.children ? (
                    closedChildren.indexOf(i) >= 0 ? (
                      <AiOutlineMinus />
                    ) : (
                      <AiOutlinePlus />
                    )
                  ) : null}
                </div>
                {e.children ? (
                  <div
                    className={[
                      styles["spoiler-wrapper__children-item-children"],
                      closedChildren.indexOf(i) >= 0 &&
                        styles[
                          "spoiler-wrapper__children-item-children_closed"
                        ],
                    ].join(" ")}
                  >
                    {e.children.map((e) => {
                      return (
                        <div
                          className={
                            styles["spoiler-wrapper__children-item-subchild"]
                          }
                        >
                          {e}
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
      </div>
    </div>
  );
};
