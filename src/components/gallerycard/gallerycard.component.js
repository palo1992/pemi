import {
  GalleryCardContainer,
  GalleryCardBg,
  LinkStyled,
} from "./gallerycard.styles";

const GalleryCard = ({ id, src, title, category }) => (
  <GalleryCardContainer>
    <h2>{title}</h2>
    <GalleryCardBg id={id} src={src} />
    <LinkStyled to={`/moja_praca/${category}`}>
      vidieť viac
    </LinkStyled>
  </GalleryCardContainer>
);

export default GalleryCard;
