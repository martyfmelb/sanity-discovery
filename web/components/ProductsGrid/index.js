import styles from "./index.module.scss";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";
import ColorSwatchInline from "../ColorSwatchInline";
import NextSanityImage from "../NextSanityImage";
import formatMoney from "../../utils/format-money";
import Typography from "../Typography";

const ProductsGrid = (props) => {
  return (
    <div className={styles.root}>
      {props.products.map((product) =>
        <div className={styles.card} key={product._id}>
          <h2>{product.shortName}</h2>
          <NextSanityImage
            layout="responsive"
            sizes="50vw"
            quality="80"
            image={product.thumbnail}
          />
          {product.driveawayPrice &&
            <h3>Driveaway from: {formatMoney(product.driveawayPrice)}</h3>
          }
          {product.featured && <strong className={styles.badge}>GREAT VALUE</strong>}
          <Typography>
            <BlockContent
              blocks={product.description}
              renderContainerOnSingleChild={true}
              {...client.config()}
            />
          </Typography>
          <h3>Available colours:</h3>
          <ul className="sd-plain-list">
            {product.availableColours.map((color) => (
              <li key={color._id}>
                <ColorSwatchInline color={color.hexColour} name={color.name}/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
};

export default ProductsGrid;