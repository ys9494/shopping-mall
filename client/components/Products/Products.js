import { useEffect, useLayoutEffect } from "react";
import { ProductsWrapper } from "./products-styled";
import Router from "next/router";
import { ROUTE_PATH } from "@/utils/routes";

const Products = ({ cateItems }) => {
  // const cate = ["all", "tees", "outwear"];

  useLayoutEffect(() => {
    console.log("cat", cateItems);

    if (cateItems.length < 1) {
      // Router.push(ROUTE_PATH.PRODUCTS + "?category=ALL");
      console.log("없음");
    }
  }, [cateItems]);

  return (
    <ProductsWrapper>
      <h2>cate</h2>
      <div>Products</div>
    </ProductsWrapper>
  );
};

export default Products;
