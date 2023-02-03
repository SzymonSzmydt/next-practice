import { useRouter } from "next/router";
import Link from "next/link";

export default function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div> Loading...</div>;
  }
  return (
    <div>
      <p> {product.title} </p>
      <p> {product.price} </p>
      <p> {product.description}</p>
      <Link href="/products"> Wróć </Link>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}
