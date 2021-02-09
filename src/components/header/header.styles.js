import styled from "styled-components";

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

