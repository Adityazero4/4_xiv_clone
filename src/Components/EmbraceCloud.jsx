import React from "react";
import { Box, Text, Flex, Image, Link } from "@chakra-ui/react";
import cloud from "../Images/cloud.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const AIAndRPA = () => {
  return (
    <Box bg="white" borderRadius="md" pl="3%" pr="3%">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "flex-start" }}
      >
        <Box pr={{ base: "auto", md: "17%" }}>
          <Text
            fontWeight="lighter"
            fontStyle="normal"
            fontSize={{ base: "38px", md: "64px" }}
            lineHeight="normal"
          >
            Embrace Cloud
          </Text>
          <Box mt="20px" pr={{ base: "auto", md: "17%" }}>
            <Text color="black" mt={2} fontSize="1.3rem" marginBottom="50px">
              With Cloud-First accelerate innovation and optimize performance
            </Text>
          </Box>
          <Box
            _hover={{ color: "gray.500" }}
            pr={{ base: "auto", md: "17%" }}
            mt={{ md: "130px", base: "15px" }}
            mb={{ md: "0", base: "30px" }}
          >
            <Link
              fontWeight="bold"
              fontSize="2xl"
              pr="15px"
              color={{ md: "black", base: "blue" }}
              _hover={{ textDecoration: "none" }}
            >
              Cloud Services
            </Link>
            <ArrowForwardIcon w={10} h={6}></ArrowForwardIcon>
          </Box>
        </Box>

        <Box ml={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }}>
          <Image
            src={cloud}
            alt="AI + RPA"
            objectFit="contains"
            maxW="520px"
            maxH="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AIAndRPA;
