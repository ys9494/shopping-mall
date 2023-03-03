import styled from "styled-components";

export const ProductsWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  h2 {
    margin-left: 10px;
  }
`;

export const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductItemWrapper = styled.div`
  margin: 10px;
  cursor: pointer;
`;

export const ProductImageWrapper = styled.div`
  width: 280px;
  height: 320px;
  background-color: #ddd;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
