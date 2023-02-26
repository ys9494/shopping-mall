import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavWrapper,
  LocalNav,
  GlobalNavWrapper,
  MainNav,
  SubNav,
  GlobalNav,
  SearchInput,
  NavBar,
  LocalMobileNav,
  MainMobileNav,
  SubMobileNav,
  CloseButton,
} from "./nav-styled";

const Nav = () => {
  const [navClosed, setNavClosed] = useState(true);

  const showNav = () => {
    setNavClosed(!navClosed);
  };

  return (
    <NavWrapper>
      <LocalNav>
        <MainNav>
          <Link href="/">NEW</Link>
        </MainNav>
        <MainNav>
          <Link href="/">CLOTHING</Link>
          <SubNav>
            <li>
              <Link href="/">TEES</Link>
            </li>
            <li>
              <Link href="/">SWEATS</Link>
            </li>
            <li>
              <Link href="/">OUTERWEAR</Link>
            </li>
            <li>
              <Link href="/">PANTS</Link>
            </li>
            <li>
              <Link href="/">OTHERS</Link>
            </li>
          </SubNav>
        </MainNav>
        <MainNav>
          <Link href="/">ACCESSORIES</Link>
          <SubNav>
            <li>
              <Link href="/">EYEWEAR</Link>
            </li>
            <li>
              <Link href="/">HEADWEAR</Link>
            </li>
            <li>
              <Link href="/">OTHERS</Link>
            </li>
          </SubNav>
        </MainNav>
      </LocalNav>
      <NavBar onClick={showNav}>menu</NavBar>
      <GlobalNavWrapper>
        <SearchInput>
          <input type="text" placeholder="search" />
          <div>
            <Image src={"/img/search.svg"} fill alt="search" />
          </div>
        </SearchInput>
        <GlobalNav>
          <li>
            <Link href="/login">
              <Image src={"/img/account.svg"} fill alt="search" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src={"/img/bag.svg"} fill alt="search" />
            </Link>
          </li>
        </GlobalNav>
      </GlobalNavWrapper>
      <LocalMobileNav closed={navClosed}>
        <CloseButton onClick={showNav}>X</CloseButton>
        <MainMobileNav>
          <Link href="/">NEW</Link>
        </MainMobileNav>
        <MainMobileNav>
          <Link href="/">CLOTHING</Link>
          <SubMobileNav>
            <li>
              <Link href="/">TEES</Link>
            </li>
            <li>
              <Link href="/">SWEATS</Link>
            </li>
            <li>
              <Link href="/">OUTERWEAR</Link>
            </li>
            <li>
              <Link href="/">PANTS</Link>
            </li>
            <li>
              <Link href="/">OTHERS</Link>
            </li>
          </SubMobileNav>
        </MainMobileNav>
        <MainMobileNav>
          <Link href="/">ACCESSORIES</Link>
          <SubMobileNav>
            <li>
              <Link href="/">EYEWEAR</Link>
            </li>
            <li>
              <Link href="/">HEADWEAR</Link>
            </li>
            <li>
              <Link href="/">OTHERS</Link>
            </li>
          </SubMobileNav>
        </MainMobileNav>
      </LocalMobileNav>
    </NavWrapper>
  );
};

export default Nav;
