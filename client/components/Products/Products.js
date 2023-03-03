import { useEffect, useLayoutEffect } from "react";
import Router from "next/router";
import { ROUTE_PATH } from "@/utils/routes";
import ProductList from "./ProductList";
import ProductItem from "./ProductItem";
import { ProductsWrapper, ProductListWrapper } from "./products-styled";

const Products = ({ cateItems }) => {
  // const cate = ["all", "tees", "outwear"];

  useLayoutEffect(() => {
    console.log("cat", cateItems);

    if (cateItems.length < 1) {
      Router.push(ROUTE_PATH.PRODUCTS + "?category=all");
      console.log("없음");
    }
  }, [cateItems]);

  return (
    <ProductsWrapper>
      <h2>cate</h2>
      <ProductListWrapper>
        {cateItems?.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ProductListWrapper>
    </ProductsWrapper>
  );
};

export default Products;
