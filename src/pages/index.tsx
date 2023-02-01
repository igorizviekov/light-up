import MainContainer from "@/components/MainContainer";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  return (
    <MainContainer>
      <ProductCard
        img={require("../assets/product-card-mock.png").default.src}
        isNew={true}
        sale={30}
        category="SACRALITY"
        title="HEXAGON LIGHT"
      />
      <Pagination />
    </MainContainer>
  );
};

export default Index;
