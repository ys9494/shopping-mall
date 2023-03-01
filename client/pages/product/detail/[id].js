import AppLayout from "@/components/AppLayout";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

export default function ProductDetailPage({ productId }) {
  return (
    <AppLayout>
      <ProductDetail productId={productId} />
    </AppLayout>
  );
}

export async function getServerSideProps(context) {
  const { productId } = context.params;
  // ...
  return {
    props: { productId },
  };
}
