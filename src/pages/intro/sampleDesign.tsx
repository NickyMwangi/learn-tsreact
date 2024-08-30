import { Box, Heading, Text } from "@chakra-ui/react";
import { Pricing } from "./pricing";
import { Features } from "./features";

export function SampleDesign() {
  return (
    <>
      <Box
        as="section"
        color="gray.50"
        bg="purple.600"
        pt={["60px", "60px", "90px"]}
        pb="198px"
        px="8"
        textAlign={["left", "left", "center"]}
      >
        <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]}>
          Simple pricing for your business
        </Heading>
        <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} pt="4">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
      <Pricing></Pricing>
      <Features></Features>
    </>
  );
}
