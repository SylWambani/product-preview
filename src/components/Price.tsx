import { Box, Text } from '@chakra-ui/react'
import "@fontsource/fraunces/700.css";
import "@fontsource/montserrat/500.css";


const Price = () => {
  return (
    <Box display="flex" gap="5%" alignItems="center" marginBottom={{base:'3%', md:'3%', lg:'8%', xl:'10%'}} >
      <Text
        fontFamily="fraunces"
        fontSize={{ base: "xl", md: "4xl", lg: "4xl", xl: "5xl" }}
        fontWeight={700}
        color="#3c8067"
      >
        $149.99
      </Text>
      <Text
        textDecoration="line-through"
        fontFamily="montserrat"
        fontSize={{ base: 'small', md: "lg", lg: "xl", xl: "2xl" }}
        color="#6c7289"
      >
        $169.99
      </Text>
    </Box>
  );
}

export default Price