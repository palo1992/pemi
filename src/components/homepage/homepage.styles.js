import styled from "styled-components";
import wrenchBgImg from "../../assets/img/homePage-bg-img.jpg";
export const HomepageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  width: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${wrenchBgImg});
  background-size: cover;
  background-position: top;
`;

export const HomepageContent = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 20px;
  text-transform: uppercase;
  h1 {
    letter-spacing: 6px;
  }
  li {
    list-style-type: none;
    letter-spacing: 2px;
    line-height: 32px;
  }
`;
