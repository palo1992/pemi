import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailPageContainer = styled.div`
  height: calc(90vh - 6rem);
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DetailPicture = styled.div`
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BackButton = styled(Link)`
  display: inline-block;
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 4rem;
  font-weight: 700;
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  background-color: rgba(250, 250, 250, 0.5);
`;