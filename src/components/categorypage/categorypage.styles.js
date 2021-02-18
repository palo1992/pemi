import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: calc(90vh - 6rem);
  margin: 0 auto;
  h2 {
    font-size: 3rem;
    text-align: center;
  }
  position: relative;
`;

export const CategoryCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

export const Card = styled(Link)`
  display: block;
  width: 30%;
  height: 27rem;
  margin: 10px;
  @media screen and (max-width: 980px) {
    width: 40%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
export const CardBg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  transition: all 0.5s;
  :hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }
`;
