import { FooterContainer, Mark } from "./footer.styles";
//import Logo from "../logo/logo.component";
import Nav from "../navigation/navigation.component";

const Footer = () => (
   
  <FooterContainer>
    <ul>
      <li>Peter Mikolaj</li>
      <li>0903 914 821</li>
      <li>IČO: 5451361</li>
      <li>Pri štadióne 11, 085 01</li>
    </ul>
    <Nav />
    <Mark>
      <p>&copy; Pavol Harčarik 2021</p>
      <span></span>
    </Mark>
  </FooterContainer>
);
export default Footer;
