import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
align-items: center;
  box-sizing: border-box;
  min-height: 10vh;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width:500px){
    flex-direction: column;
    justify-content: unset;
  }
`;

