import { Button, Image } from "@chakra-ui/react";
import cartIcon from "../assets/images/icon-cart.svg";

const CartButton = () => {
  return (
    <Button
      backgroundColor="#3c8067"
      width="100%"
      size={{ base: "md", md: "2xl", lg: "xl", xl: "2xl" }}
      borderRadius="6px"
      color="#ffffff"
      _hover={{backgroundColor:'#1c232b', cursor:'pointer'}}
    >
      <Image src={cartIcon} />
      Add to Cart
    </Button>
  );
};

export default CartButton;
