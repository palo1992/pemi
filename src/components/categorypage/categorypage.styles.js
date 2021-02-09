import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  margin: 0 auto;
  h2 {
    justify-self: center;
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 500;
  }
  position: relative;
`;

export const CategoryCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 90%;
  margin: 10px auto;
`;

export const Card = styled(Link)`
  display: block;
  width: 30%;
  height: 45%;
  margin: 10px;  }
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
