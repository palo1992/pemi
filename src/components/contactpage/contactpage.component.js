import { ContactPageContainer, ContactCredentials } from "./contactpage.styles";
import MapContainer from "../googlemap/googlemap.component";
 

const ContactPage = () => (
  <ContactPageContainer>
    <ContactCredentials>
      <p>
        <span>Adresa:</span>Pri štadióne 11, 085 01
      </p>
      <p>
        <span>Telefón:</span>0903 914 821
      </p>
    </ContactCredentials>
    <MapContainer />
  </ContactPageContainer>
);

export default ContactPage;
