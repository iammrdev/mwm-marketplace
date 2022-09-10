import { Helmet } from "react-helmet";
import { TestDiv } from "./HomePage.styles";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Главная - MW Marketplace</title>
      </Helmet>

      <h1>Главная</h1>
      <TestDiv />
    </>
  );
};

export default HomePage;
