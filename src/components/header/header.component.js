import { HeaderContainer } from "./header.styles";
import Logo from "../logo/logo.component";
import Nav from "../navigation/navigation.component";

const Header = () => (
  <HeaderContainer>
    <Logo />
    <Nav primary/>
  </HeaderContainer>
);
export default Header;
