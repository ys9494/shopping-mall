import Link from "next/link";
import { MainWrapper, Banner, BannerItem } from "./main-styled";
import { ROUTE_PATH } from "@/utils/routes";

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
          <Link href={ROUTE_PATH.PRODUCTS + "?category=new"}>
            <span>NEW</span>
          </Link>
        </BannerItem>
        <BannerItem bg={bgImgs[1]}>
          <Link href={ROUTE_PATH.PRODUCTS + "?category=sweats"}>
            <span>SWEATS</span>
          </Link>
        </BannerItem>
        <BannerItem bg={bgImgs[2]}>
          <Link href={ROUTE_PATH.PRODUCTS + "?category=pants"}>
            <span>PANTS</span>
          </Link>
        </BannerItem>
        <BannerItem bg={bgImgs[3]}>
          <Link href={ROUTE_PATH.PRODUCTS + "?category=acc"}>
            <span>ACC</span>
          </Link>
        </BannerItem>
      </Banner>
    </MainWrapper>
  );
};

export default Main;
