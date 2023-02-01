import MainContainer from "@/components/MainContainer";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import styles from "./index.module.scss";

const Index = () => {
  return (
    <MainContainer>
      <div className={styles["main-page"]}>
        <main className={styles["main-page__main"]}>
          <div className={styles["main-page__card-wrapper"]}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => {
              return (
                <ProductCard
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
