import Filters from "@/components/Filters";
import MainContainer from "@/components/MainContainer";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import styles from "./index.module.scss";

const Index = () => {
  return (
    <MainContainer>
      <div className={styles["main-page"]}>
        <div className={styles["main-page__header-wrapper"]}>
          <h2 className={styles["main-page__header-title"]}>All products</h2>
        </div>
        <Filters />
        <main className={styles["main-page__main"]}>
          <div className={styles["main-page__card-wrapper"]}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => {
              return (
                <ProductCard
                  price={300}
                  key={e}
                  img={require("../assets/product-card-mock.png").default.src}
                  isNew={true}
                  sale={30}
                  category="SACRALITY"
                  title="HEXAGON LIGHT"
                />
              );
            })}
          </div>
          <div className={styles["main-page__card-wrapper-mobile"]}>
            {[1, 2, 3, 4, 5, 6].map((e) => {
              return (
                <ProductCard
                  price={300}
                  key={e}
                  img={require("../assets/product-card-mock.png").default.src}
                  isNew={true}
                  sale={30}
                  category="SACRALITY"
                  title="HEXAGON LIGHT"
                />
              );
            })}
          </div>
          <div className={styles["main-page__card-wrapper-mobile-sm"]}>
            {[1, 2, 3, 4].map((e) => {
              return (
                <ProductCard
                  price={300}
                  key={e}
                  img={require("../assets/product-card-mock.png").default.src}
                  isNew={true}
                  sale={30}
                  category="SACRALITY"
                  title="HEXAGON LIGHT"
                />
              );
            })}
          </div>
          <Pagination />
        </main>
      </div>
    </MainContainer>
  );
};

export default Index;
