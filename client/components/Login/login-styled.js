import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    padding-top: 80px;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
  }
`;

export const LoginForm = styled.form`
  width: 320px;
  margin: 0 20px;
`;

export const GotoSingup = styled.div`
  text-align: center;
  margin-top: 10px;
  a {
    transition: all 0.3s;
  }

  &:hover a {
    opacity: 0.7;
  }
`;
