import styled from "styled-components";
import { Link } from "react-router-dom";

export const GalleryCardContainer = styled.div`
  height: 27rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  position: relative;
  @media screen and (max-width:800px){
    width: 90%;
    height: 450px;
`;

export const GalleryCardBg = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 10px;
  border-radius: 3px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  justify-self: flex-end;
  transition: all 0.5s;
  :hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.8);
  }
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  background-color: rgba(19, 60, 150, 0.8);
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  text-align: center;
  padding: 15px 0;
`;
