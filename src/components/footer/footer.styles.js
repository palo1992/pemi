import styled from "styled-components";
import PHlogo from "../../assets/logo/PH_HP-logo.png";

export const FooterContainer = styled.div`
  height: 6rem;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: 100%;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  font-size: 2rem;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  li {
    list-style-type: none;
    padding: 0 1.5rem;
    margin: 0 auto;
    font-size: 2rem;
  }

  @media screen and (max-width: 1280px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, max-content);
    }
  }
  @media screen and (max-width: 800px) {
    p {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, max-content);
    ul {
      display: none;
    }
  }
`;

export const Mark = styled.div`
  display: flex;
  align-items: center;
  span {
    width: 52px;
    height: 50px;
    background-image: url(${PHlogo});
    background-size: cover;
    margin-left: 10px;
  }
`;
/*   @media screen and (max-width:1350px) {
    font-size: 1.5rem;
    li {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width:1090px) {
    font-size: 1.2rem;
    li {
      font-size: 1.2rem;
    }
  } */
