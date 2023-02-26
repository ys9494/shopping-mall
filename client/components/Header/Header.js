import Link from "next/link";
import Image from "next/image";
import { HeaderWrapper, LogoWrapper } from "./header-styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link href="/">
          <Image src="/img/logo.png" alt="logo image" fill />
        </Link>
      </LogoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
