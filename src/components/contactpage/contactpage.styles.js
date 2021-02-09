import styled from "styled-components";
import ContactPageBg from "../../assets/img/contactPage-bg-img.jpg";

export const ContactPageContainer = styled.div`
  width: 100%;
  height: 80vh;
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
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 2px;
    span {
      font-size: 32px;
      font-weight: 600;
      margin-right: 10px;
    }
  }
`;
