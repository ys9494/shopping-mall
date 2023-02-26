import Link from "next/link";
import { MainWrapper, Banner, BannerItem } from "./main-styled";

const Main = () => {
  const bgImgs = [
    "/img/banner1.png",
    "/img/banner2.png",
    "/img/banner3.png",
    "/img/banner4.png",
  ];

  return (
    <MainWrapper>
      <Banner>
        <BannerItem bg={bgImgs[0]}>
          <Link href="/new">
            <span>NEW</span>
          </Link>
        </BannerItem>
        <BannerItem bg={bgImgs[1]}>
          <Link href="/sweats">
            <span>SWEATS</span>
          </Link>
        </BannerItem>
        <BannerItem bg={bgImgs[2]}>
          <Link href="/pants">
            <span>PANTS</span>
          </Link>
        </BannerItem>
        <BannerItem bg={bgImgs[3]}>
          <Link href="/acc">
            <span>ACC</span>
          </Link>
        </BannerItem>
      </Banner>
    </MainWrapper>
  );
};

export default Main;
