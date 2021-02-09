import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/PEMI-logo-hexa.png";

export const LogoContainer = styled(Link)`
display: block;
width: auto;
height: 100%;
padding: 10px 15px;
`;

export const LogoStyled = styled.img.attrs(()=> ({
  src: logo
}))`
display: block;
height: 100%;
`;