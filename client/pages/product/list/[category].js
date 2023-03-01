import AppLayout from "@/components/AppLayout";
import Products from "@/components/Products/Products";
import Router from "next/router";

export default function ProductListPage({ category }) {
  return (
    <AppLayout>
      <Products category={category} />
    </AppLayout>
  );
}

export async function getServerSideProps(context) {
  const { category } = context.params;
  // ...

  return {
    props: { category },
  };
}
