import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { IMainContainerProps } from "./types";
import styles from "./MainContainer.module.scss";
import Head from "next/head";

const MainContainer: React.FC<IMainContainerProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <div className={styles["wrapper"]}>
        <Header />
        <main className={styles["main"]}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainContainer;
