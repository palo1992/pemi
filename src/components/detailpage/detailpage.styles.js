import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailPageContainer = styled.div`
  margin-top: 20px;
  height: 70vh;
  display: flex;
  justify-content: center;
`;

export const DetailPicture = styled.div`
  height: 100%;
  position: relative;

  img {
    display: block;
    height: 100%;
  }
`;

export const BackButton = styled(Link)`
  display: inline-block;
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  position: absolute;
  top: 0;
  right: 0;
  width: 2rem;
  background-color: rgba(250, 250, 250, 0.5);
`;
