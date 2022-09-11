import { Helmet } from "react-helmet";

import ProductCard from "components/ProductCard";
import { mockProducts } from "mocks/mockProducts";
import { PageWrapper } from "App.styled";
import { ProductGroup, ProductGroupContainer } from "./HomePage.styled";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Главная - MW Marketplace</title>
      </Helmet>

      <PageWrapper>
        <ProductGroup>
          <h2>Рекомендуемые товары</h2>

          <ProductGroupContainer>
            {mockProducts.map((p) => (
              <ProductCard
                {...p}
                key={p.id}
                // isLiked={idsInFavorites.includes(p.id)}
              />
            ))}
          </ProductGroupContainer>
        </ProductGroup>
      </PageWrapper>
    </>
  );
};

export default HomePage;
