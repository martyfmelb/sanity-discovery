// post.js
import { useRouter } from "next/router";
import client from "../client";
import ProductsGrid from "../components/ProductsGrid";

const Products = (props) => {
  const router = useRouter();

  return (
    <div className="u-container">
      <h1 className="tg-h1">Products</h1>
      <ProductsGrid products={props.products} />
    </div>
  );
};

Products.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;

  return {
    products: await client.fetch(`*[_type == "product"]{
      ...,
      "availableColours": availableColours[]->
    }`, { slug })
  };
};

export default Products;
