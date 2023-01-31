import { useState } from "react";
import DropDown from "../DropDown";
import { Spoiler } from "../Spoiler";
import styles from "./Menu.module.scss";

const Menu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showMenuWrapper, setShowMenuWrapper] = useState<boolean>(false);

  const langs = ["UA", "US", "RU"];
  const spoiler = {
    label: "Spoiler1",
    children: [
      {
        children: ["Subchild1", "Subchild1", "Subchild1"],
        label: "Child1",
      },
      {
        label: "Child2",
        children: ["Subchild1", "Subchild1", "Subchild1"],
      },
      {
        label: "Child3",
        children: ["Subchild1", "Subchild1", "Subchild1"],
      },
    ],
  };
  return (
    <>
      <button
        className={styles["menu-button"]}
        onClick={() => {
          setShowMenuWrapper(true);
          setShowMenu(true);
        }}
      >
        <div className={styles["menu-button__first"]}></div>
        <div className={styles["menu-button__second"]}></div>
        <div className={styles["menu-button__third"]}></div>
      </button>
      {showMenuWrapper ? (
        <div
          className={
            styles["menu"] + " " + (showMenu ? "" : styles[`menu_close`])
          }
        >
          <div className={styles[`menu__content`]}>
            {showMenu ? (
              <div>
                <header className={styles[`menu__header`]}>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      setTimeout(() => setShowMenuWrapper(false), 300);
                    }}
                  />
                  <DropDown items={langs} />
                </header>
                <div>
                  <Spoiler {...spoiler} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Menu;
