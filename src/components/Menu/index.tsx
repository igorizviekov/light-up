import { useEffect, useRef, useState } from "react";
import DropDown from "../DropDown";
import { Spoiler } from "../Spoiler";
import styles from "./Menu.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { getClassByCondition, setHidden } from "@/utils";

const Menu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showMenuWrapper, setShowMenuWrapper] = useState<boolean>(false);

  const menuContentRef = useRef<HTMLDivElement | null>(null);
  const menuWrapperRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = (e: Event) => {
    if (
      menuWrapperRef.current?.contains(e.target as Document) &&
      !menuContentRef.current?.contains(e.target as Document)
    ) {
      setShowMenu(false);
      setTimeout(() => setShowMenuWrapper(false), 300);
      setHidden();
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const langs = ["UA", "US", "RU"];
  const spoiler = {
    label: "Spoiler1",
    children: [
      {
        label: "Child1",
      },
      {
        label: "Child2",
      },
      {
        label: "Child3",
        children: ["Subchild1", "Subchild1", "Subchild1"],
      },
    ],
  };
  const spoilerEmpty = {
    label: "Spoiler1",
  };

  return (
    <>
      <button
        className={styles["menu-button"]}
        onClick={() => {
          setShowMenuWrapper(true);
          setShowMenu(true);
          setHidden();
        }}
      >
        <div className={styles["menu-button__first"]}></div>
        <div className={styles["menu-button__second"]}></div>
        <div className={styles["menu-button__third"]}></div>
      </button>
      {showMenuWrapper ? (
        <div
          ref={menuWrapperRef}
          className={[
            styles["menu"],
            getClassByCondition(!showMenu, styles[`menu_close`]),
          ].join(" ")}
        >
          <div className={styles[`menu__content`]} ref={menuContentRef}>
            {showMenu ? (
              <div>
                <header className={styles[`menu__header`]}>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      setTimeout(() => setShowMenuWrapper(false), 300);
                      setHidden();
                    }}
                  >
                    <AiOutlineClose size="100%" />
                  </button>
                  <DropDown items={langs} />
                </header>
                <main className={styles[`menu__main`]}>
                  <Spoiler {...spoiler} />
                  <Spoiler {...spoiler} />
                  <Spoiler {...spoilerEmpty} />
                </main>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Menu;
