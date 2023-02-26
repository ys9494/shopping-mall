import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 800px;
`;
export const Banner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 800px;
  background-image: url("/img/fullimg.png");
  background-repeat: no-repeat;
`;

export const BannerItem = styled.div`
  width: 25%;
  height: 100%;
  background-repeat: no-repeat;
  cursor: pointer;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }

  &:not(:last-of-type) {
    border-right: 1.5px solid #fff;
  }

  &:hover {
    background-image: url(${(props) => props.bg});
  }
`;
