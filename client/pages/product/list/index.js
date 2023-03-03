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
  { id: 1, name: "new1", imageUrl: "", price: "120000", cate: "new" },
  { id: 2, name: "new2", imageUrl: "", price: "140000", cate: "new" },
  { id: 3, name: "pants1", imageUrl: "", price: "160000", cate: "pants" },
  { id: 4, name: "pants2", imageUrl: "", price: "150000", cate: "pants" },
  { id: 5, name: "outwear1", imageUrl: "", price: "160000", cate: "outwear" },
  { id: 6, name: "outwear2", imageUrl: "", price: "150000", cate: "outwear" },
  { id: 7, name: "acc1", imageUrl: "", price: "160000", cate: "acc" },
  { id: 8, name: "acc2", imageUrl: "", price: "150000", cate: "acc" },
  { id: 9, name: "sweats1", imageUrl: "", price: "160000", cate: "sweats" },
  { id: 10, name: "sweats2", imageUrl: "", price: "150000", cate: "sweats" },
];

export async function getServerSideProps(context) {
  const { category } = await context.query;
  // ...
  let cateItems = [];
  if (category === "all") {
    cateItems = products;
  } else {
    cateItems = products.filter(({ cate }) => cate === category);
  }

  return {
    props: { cateItems },
  };
}
