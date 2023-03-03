import { useEffect } from "react";
import Image from "next/image";
import { ProductItemWrapper, ProductImageWrapper } from "./products-styled";

const ProductItem = (item) => {
  useEffect(() => {
    console.log("item", item);
  }, [item]);

  return (
    <ProductItemWrapper>
      <ProductImageWrapper>
        {item?.imgUrl && <Image src={item.imageUrl} alt={item.name} />}{" "}
      </ProductImageWrapper>
      <p>{item?.name}</p>
      <p>{item?.price} KRW</p>
    </ProductItemWrapper>
  );
};

export default ProductItem;
