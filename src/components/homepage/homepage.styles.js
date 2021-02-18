import styled from "styled-components";
import wrenchBgImg from "../../assets/img/homePage-bg-img.jpg";
export const HomepageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 45%);
  align-content: center;
  justify-content: center;
  min-height: calc(90vh - 6rem);
  width: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${wrenchBgImg});
  background-size: cover;
  background-position: top;
  @media screen and (max-width:600px){
    grid-template-columns: 90vw;
  }
  `;

export const HomepageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  text-transform: uppercase;
  text-align: center;
  h1 {
    letter-spacing: 6px;
  }
   li {
    list-style-type: none;
    letter-spacing: 2px;
    line-height: 32px;
  }
  
`;
