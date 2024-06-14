import BestSellingBooks from "../Components/BestSellingBooks/BestSellingBooks";
import Brands from "../Components/Brands/Brands";
import FeaturesBooks from "../Components/FeaturesBooks/FeaturesBooks";
import Header from "../Components/Header/Header";
import LatestArticle from "../Components/LatestArticle/LatestArticle";
import PopularBooks from "../Components/PopularBooks/PopularBooks";
import Quote from "../Components/Quote/Quote";

export default function Home() {
  return (
    <div>
      <Header />
      <Brands />
      <FeaturesBooks />
      <BestSellingBooks />
      <PopularBooks />
      <Quote />
      <LatestArticle />
    </div>
  );
}
