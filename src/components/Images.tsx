import { Image, useBreakpointValue } from "@chakra-ui/react";
import type { ResponsiveValue } from "@chakra-ui/styled-system";

import picha1 from "../assets/images/image-product-mobile.jpg";
import picha2 from "../assets/images/image-product-desktop.jpg";

interface Props {
  widths: ResponsiveValue<string>;
  heights: ResponsiveValue<string>;
}

const Images = ({widths, heights}:Props) => {
  const imageSrc = useBreakpointValue({
    base: picha1,
    sm: picha1,
    md: picha1,
    lg: picha2,
    xl: picha2,
  });

  return (
    <Image
      src={imageSrc}
      alt="Product"
      objectFit='cover'
      width={widths}
      height={heights}
    />
  );
};

export default Images;
