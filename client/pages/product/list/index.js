import AppLayout from "@/components/AppLayout";
import Products from "@/components/Products/Products";
import Router from "next/router";

export default function ProductListPage(props) {
  return (
    <AppLayout>
      <Products {...props} />
    </AppLayout>
  );
}

export const products = [
  { id: 1, name: "tees1", imageUrl: "", price: "120000", cate: "tees" },
  { id: 2, name: "tees2", imageUrl: "", price: "140000", cate: "tees" },
  { id: 3, name: "tees3", imageUrl: "", price: "160000", cate: "pants" },
  { id: 4, name: "tees4", imageUrl: "", price: "150000", cate: "pants" },
  { id: 3, name: "tees3", imageUrl: "", price: "160000", cate: "outwear" },
  { id: 4, name: "tees4", imageUrl: "", price: "150000", cate: "outwear" },
  { id: 3, name: "tees3", imageUrl: "", price: "160000", cate: "ALL" },
  { id: 4, name: "tees4", imageUrl: "", price: "150000", cate: "ALL" },
];

export async function getServerSideProps(context) {
  const { category } = await context.query;
  // ...
  const cateItems = products.filter(({ cate }) => cate === category);

  // console.log("items", cateItems);

  return {
    props: { cateItems },
  };
}
