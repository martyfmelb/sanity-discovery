import client from "../../client";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";

const NextSanityImage = (props) => {
  const imageProps = useNextSanityImage(
    client,
    props.image
  );

  const { image, ...propsMinusImage } = props;

  return (
    <Img {...imageProps} {...propsMinusImage} />
  );
}

export default NextSanityImage;