import { useEffect, useLayoutEffect } from "react";
import { ProductsWrapper } from "./products-styled";
import Router from "next/router";
import { ROUTE_PATH } from "@/utils/routes";

const Products = ({ category }) => {
  const cate = ["all", "tees", "outwear"];

  useLayoutEffect(() => {
    console.log("cat", category);

    // if (!cate.find((item) => item === category)) {
    //   Router.push(ROUTE_PATH.PRODUCTS + "ALL");
    // }
  }, [category]);

  return (
    <ProductsWrapper>
      <h2>{category}</h2>
      <div>Products</div>
    </ProductsWrapper>
  );
};

export default Products;
