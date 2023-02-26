import styled from "styled-components";

export const SingupWrapper = styled.div`
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

export const SignupForm = styled.form`
  width: 320px;
  margin: 0 20px;
`;

export const InvalidMessage = styled.div`
  font-size: 0.7rem;
  position: absolute;
  right: 0;
  bottom: -20px;
  color: red;
`;

export const GotoLogin = styled.div`
  text-align: center;
  margin-top: 10px;
  transition: all 0.3s;

  &:hover a {
    opacity: 0.7;
  }
`;
