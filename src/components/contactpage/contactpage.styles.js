import styled from "styled-components";
import ContactPageBg from "../../assets/img/contactPage-bg-img.jpg";

export const ContactPageContainer = styled.div`
  width: 100%;
  min-height: calc(90vh - 6rem);
  display: flex;
  flex-direction: column;
  background-image: url(${ContactPageBg});
  background-size: cover;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const ContactCredentials = styled.div`
  p {
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: 2px;
    span {
      font-size: 3.2rem;
      font-weight: 600;
      margin-right: 1rem;
    }
  }
`;
