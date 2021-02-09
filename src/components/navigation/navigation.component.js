import { NavContainer, NavLink } from "./navigation.styles";

const Navigation = ({primary}) => (
  <NavContainer primary={primary}>
    <NavLink to="/kontakt">KONTAKT</NavLink>
    <NavLink to="/moja_praca">MOJA PRÁCA</NavLink>
  </NavContainer>
);
export default Navigation;
