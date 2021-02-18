import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/PEMI-ORIGIN.png";

export const LogoContainer = styled(Link)`
display: block;
height: 10vh;
padding: 5px;
`;

export const LogoStyled = styled.img.attrs(()=> ({
  src: logo,
  alt: 'logo'
}))`
display: block;
height: 100%;
@media screen and (max-width: 500px) {
  position: relative;
  margin: 0 auto;
} 
`;