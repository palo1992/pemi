import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  background-color: ${(props) => (props.primary ?  `rgba(164, 32, 32, 0.7)
  ` : "transparent")};
  color: ${props => props.primary ? "white" : "black"};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2rem;
  @media screen and (max-width:800px){
    ${(props) => (props.primary ? `
    flex-direction: row;` : `flex-direction: column;   justify-content: center;
    `)}
  }
  @media screen and (max-width:500px){
    flex-direction: row;
    justify-content: center;
    ${(props) => (props.primary ? `
    align-items: unset;` : ``)}
  }
`;
export const NavLink = styled(Link)`
  color: inherit;
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width:800px){
    ${(props) => (props.primary ? `
    padding: 10px 15px;` : `padding: 0;`)}
  }
  @media screen and (max-width:500px){
    ${(props) => (props.primary ? `
    padding: 0 5px;` : `padding-left: 10px;`)}
  }
  `;
