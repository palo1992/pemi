import { GalleryPageContainer } from "./gallerypage.styles";
import GalleryCard from "../gallerycard/gallerycard.component";
import Spinner from "../spinner/spinner.component";
import imgArray from "../../imgArray";

const GalleryPage = () => {
  if (imgArray) {
    return (
      <GalleryPageContainer>
        {imgArray.map((user, i) => {
          return (
            <GalleryCard
              key={i}
              id={imgArray[i].id}
              src={imgArray[i].src}
              title={imgArray[i].title}
              category={imgArray[i].category}
            />
          );
        })}
      </GalleryPageContainer>
    );
  } else {
    return <Spinner />;
  }
};

export default GalleryPage;
