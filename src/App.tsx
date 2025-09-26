import { Card, Flex } from "@chakra-ui/react";
import "../src/App.css";
import Images from "./components/Images";
import Headings from "./components/Headings";
import Descriptions from "./components/Descriptions";
import Price from "./components/Price";
import CartButton from "./components/CartButton";
import { useState, useEffect } from "react";

function App() {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const handleResize = () =>
      setIsPortrait(window.innerHeight > window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Flex
      //className="responsive-flex"
      height="100%"
      align="center"
      justify="center"
    >
      <Card.Root
        overflow="hidden"
        height="100%"
        width={{ base: "100%", sm: "90%", md: "80%", lg: "70%", xl: "60%" }}
        border="0"
      >
        <Flex
          //direction={isPortrait ? "column" : "row"}
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          height="100%"
        >
          <Images
            widths={
              isPortrait
                ? "100%"
                : {
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "50%",
                    xl: "50%",
                  }
            }
            heights={
              isPortrait
                ? "50%"
                : {
                    base: "30%",
                    sm: "30%",
                    md: "50%",
                    lg: "auto",
                    xl: "auto",
                  }
            }
          />
          <Card.Body
            padding={{base:'6%', md:"5%", lg:"5%", xl:"5%"}}
            width={
              isPortrait
                ? "100%"
                : {
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "50%",
                    xl: "50%",
                  }
            }
            height={
              isPortrait
                ? "50%"
                : {
                    base: "70%",
                    sm: "70%",
                    md: "50%",
                    lg: "100%",
                    xl: "100%",
                  }
            }
          >
            <Card.Title>
              <Headings />
            </Card.Title>
            <Card.Description >
              <Descriptions />
              <Price />
              <CartButton />
            </Card.Description>
          </Card.Body>
        </Flex>
      </Card.Root>
    </Flex>
  );
}

export default App;
