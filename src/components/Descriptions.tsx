import { Text } from '@chakra-ui/react'
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/500.css";

const Descriptions = () => {
  return (
    <Text fontFamily="Montserrat" fontWeight={500} color="#6c7289" marginBottom='3%' fontSize={{base:'small', md:'xl', lg:'xl', xl:'2xl' }}>
      A floral, solar and voluptuous interpretation composed by Olivier Polge,
      Perfumer-Creator for the House of CHANEL.
    </Text>
  );
}

export default Descriptions