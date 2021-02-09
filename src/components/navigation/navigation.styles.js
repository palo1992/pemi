import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  background-color: ${(props) => (props.primary ?  `rgba(164, 32, 32, 0.7)
  ` : "white")};
  color: ${props => props.primary ? "white" : "black"};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  color: inherit;
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
`;
