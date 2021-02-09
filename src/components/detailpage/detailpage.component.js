import {
  DetailPageContainer,
  DetailPicture,
  BackButton,
} from "./detailpage.styles";
const DetailPage = ({location, history }) => {
  console.log(history);
  return (
    <DetailPageContainer>
      <DetailPicture>
        <img src={location.pathname.slice(11)} alt={location.pathname}/>
        <BackButton onClick={history.goBack}>X</BackButton>
      </DetailPicture>
    </DetailPageContainer>
  );
};
export default DetailPage;
