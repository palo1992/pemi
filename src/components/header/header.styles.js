import styled from "styled-components";

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  min-height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width:500px){
    flex-direction: column;
    justify-content: unset;
  }
`;

