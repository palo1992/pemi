import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/PEMI-ORIGIN.png";

export const LogoContainer = styled(Link)`
display: block;
height: 100%;
padding: 5px;
`;

export const LogoStyled = styled.img.attrs(()=> ({
  src: logo
}))`
display: block;
height: 100%;
`;