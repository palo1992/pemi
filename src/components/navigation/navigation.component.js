import { NavContainer, NavLink } from "./navigation.styles";

const Navigation = ({primary}) => (
  <NavContainer primary={primary}>
    <NavLink primary={primary} to="/pemi/kontakt">KONTAKT</NavLink>
    <NavLink primary={primary} to="/pemi/moja_praca">MOJA PRÁCA</NavLink>
  </NavContainer>
);
export default Navigation;
