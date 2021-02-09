import styled from "styled-components";
import PHlogo from "../../assets/logo/PH_HP-logo.png";


export const FooterContainer = styled.div`
  height: 70px;
  width: 100%;
  display: grid;
  grid-template-columns: min-content 1fr max-content max-content;
  grid-template-rows: 100%;
  position: absolute;
  bottom: 0;
  
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: space-between;
  }
  li {
    list-style-type:none;
    padding: 0 5px;
    margin: 0 auto;
  }
`;

export const Mark = styled.div`
display: flex;
align-items: center;
margin: 0 10px;
  span {
    display: inline-block;
    width: 62px;
    height: 62px;
    background-image: url(${PHlogo});
    background-size: cover;
  }

`;
