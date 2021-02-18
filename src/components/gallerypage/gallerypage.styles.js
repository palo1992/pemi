import styled from "styled-components";
export const GalleryPageContainer = styled.div`
  width: 100%;
  min-height: calc(90vh - 6rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width:700px){
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
`;
