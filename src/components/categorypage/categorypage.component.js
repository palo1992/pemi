import {
  CategoryPageContainer,
  CategoryCardsContainer,
  CardBg, Card
} from "./categorypage.styles";
import Spinner from "../spinner/spinner.component";
import imgArray from "../../imgArray";

const CategoryPage = ({ match }) => {
  const filteredArray = imgArray.filter(
    (data) => data.category === match.params.category
  );
  if (imgArray) {
    return (
      <CategoryPageContainer>
        <h2>{filteredArray[0].title}</h2>
        <CategoryCardsContainer>
        {filteredArray.map((pictures) => {
          return pictures.images.map(sources => (
            <Card to={`/pemi/moja_praca${sources.src}`} key={sources.id}>
              <CardBg key={sources.id} src={sources.src} />
            </Card>
          ));
        })}
        </CategoryCardsContainer>
      </CategoryPageContainer>
    );
  } else {
    return <Spinner />;
  }
};

export default CategoryPage;