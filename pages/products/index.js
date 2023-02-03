import Link from "next/link";

function ProductList({ product }) {
  return (
    <>
      <h1> Produuct List </h1>
      {product.map((item) => (
        <Link href={`products/${item.id}`} key={item.id}>
          <p>
            {item.id} {item.title} {item.price}
          </p>
        </Link>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      product: data,
    },
  };
}

export default ProductList;
