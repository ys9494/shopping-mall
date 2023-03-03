import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  position: relative;

  label {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  input {
    height: 40px;
    padding-left: 10px;
    font-size: 0.9rem;
    border: 1px solid #ddd;
  }
  input:focus {
    border: 1px solid black;
  }
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  width: 100%;
  height: 40px;
  margin-top: 40px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
