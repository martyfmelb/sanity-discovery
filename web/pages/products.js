// post.js
import { useRouter } from "next/router";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source)
}

const Products = (props) => {
  const router = useRouter();

  return (<>
    <h1>Products</h1>
    <div style={{"display": "grid", "grid-template-columns": "repeat(1, 1fr)"}}>
      {props.products.map((product) =>
        <div>
          <h2>{product.shortName}</h2>
          <img src={urlFor(product.thumbnail).format("webp").quality(80).width(400).url()} />
          <h3>Driveaway from: {product.driveawayPrice}</h3>
          { product.featured && <strong>GREAT VALUE</strong> }
          <div>
            <BlockContent
              blocks={product.description}
              {...client.config()}
            />
          </div>
          <h3>Available colours:</h3>
          <ul>
            {product.availableColours.map((colour) => (
              <li>{colour.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </>);
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