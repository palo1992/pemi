import { NavContainer, NavLink } from "./navigation.styles";

const Navigation = ({primary}) => (
  <NavContainer primary={primary}>
    <NavLink primary={primary} to="/kontakt">KONTAKT</NavLink>
    <NavLink primary={primary} to="/moja_praca">MOJA PRÁCA</NavLink>
  </NavContainer>
);
export default Navigation;
