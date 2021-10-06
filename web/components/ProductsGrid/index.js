import styles from "./index.module.scss";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";
import ColorSwatchInline from "../ColorSwatchInline";
import NextSanityImage from "../NextSanityImage";
import formatMoney from "../../utils/format-money";
import RichText from "../RichText";

const ProductsGrid = (props) => {
  return (
    <div className={styles.root}>
      {props.products.map((product) =>
        <div className={styles.card} key={product._id}>
          <h2 className="tg-h2 u-mt-0">{product.shortName}</h2>
          <NextSanityImage
            layout="responsive"
            sizes="50vw"
            quality="80"
            image={product.thumbnail}
          />
          {product.driveawayPrice &&
            <h3 className="tg-label">Driveaway from: {formatMoney(product.driveawayPrice)}</h3>
          }
          {product.featured && <strong className={styles.badge}>Featured</strong>}
          <RichText keepMarginTop keepMarginBottom>
            <BlockContent
              blocks={product.description}
              renderContainerOnSingleChild={true}
              {...client.config()}
            />
          </RichText>
          <h3 className="tg-h3">Available colours</h3>
          <ul>
            {product.availableColours.map((color) => (
              <li key={color._id}>
                <ColorSwatchInline color={color.hexColour} name={color.displayName}/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
};

export default ProductsGrid;
