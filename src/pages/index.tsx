import MainContainer from "@/components/MainContainer";
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
    </MainContainer>
  );
};

export default Index;
