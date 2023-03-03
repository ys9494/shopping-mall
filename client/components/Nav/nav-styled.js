import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 40px;
  align-items: flex-end;
  padding-bottom: 10px;
`;

export const LocalNav = styled.ul`
  display: flex;
  a {
    font-size: 0.8rem;
  }
  @media all and (max-width: 720px) {
    display: none;
  }
`;

export const GlobalNavWrapper = styled.div`
  display: flex;
`;

export const GlobalNav = styled.ul`
  display: flex;
  li {
    display: block;
    width: 24px;
    height: 24px;
    margin-left: 10px;
    img {
      object-fit: contain;
    }
  }
`;

export const SearchInput = styled.label`
  display: flex;
  span {
    display: block;
    width: 24px;
    height: 24px;
    cursor: pointer;
    img {
      object-fit: contain;
    }
  }
  input {
    border: none;
    width: 120px;
  }
`;

export const MainNav = styled.li`
  padding-right: 28px;
  padding-left: 5px;
  position: relative;
  &:hover > a {
    color: rgb(216, 100, 6);
    font-weight: bold;
  }
  &:hover > ul {
    display: block;
  }
`;

export const SubNav = styled.ul`
  padding-left: 5px;
  display: none;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  z-index: 2;
  left: 0;
  top: 100%;
  width: 100%;
  transition: all 0.3s;

  li {
    margin: 14px 0;
  }

  li:hover > a {
    color: rgb(216, 100, 6);
    font-weight: bold;
  }
`;

export const LocalMobileNav = styled.ul`
  display: ${(props) => (props.closed ? "none" : "flex")};
  flex-direction: column;
  width: 80vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: #fff;
  padding: 60px 10px 0;

  a {
    font-size: 0.8rem;
  }

  @media all and (min-width: 720px) {
    display: none;
  }
`;

export const NavBar = styled.div`
  cursor: pointer;
  @media all and (min-width: 720px) {
    display: none;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 20px;
  top: 30px;
  cursor: pointer;
`;

export const MainMobileNav = styled.li`
  margin-bottom: 20px;
  &:hover > a {
    color: rgb(216, 100, 6);
    font-weight: bold;
  }
`;

export const SubMobileNav = styled.ul`
  margin-left: 20px;
  li {
    margin: 8px 0;
  }

  li:hover > a {
    color: rgb(216, 100, 6);
    font-weight: bold;
  }
`;
