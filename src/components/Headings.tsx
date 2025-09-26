import { Heading, Stack } from "@chakra-ui/react";
import "@fontsource/fraunces/700.css";
import "@fontsource/montserrat/500.css";

const Headings = () => {
  return (
    <Stack gapY='1'>
      <Heading
        fontSize={{base:'xx-small', md:'lg', lg:'xl', xl:'2xl'}}
        fontFamily="'Montserrat', sans-serif"
        fontWeight={500}
        letterSpacing="normal"
        color="#6c7289"
      >
        P E R F U M E
      </Heading>
      <Heading
        fontSize={{base:'xl', md:'4xl', lg:'3xl', xl:'5xl'}}
        fontFamily="Fraunces"
        fontWeight={700}
        color="#1c232b"
        marginBottom='5%'
        lineHeight='100%'
      >
        Gabrielle Essence Eau De Parfum
      </Heading>
    </Stack>
  );
};

export default Headings;
