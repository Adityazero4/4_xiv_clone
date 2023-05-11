import React from "react";
import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import AIAndRPA from "./AIAndRPA";
import MakeBolderChoices from "./MakeBolderChoices";
import InnovateWithSpeed from "./InnovateWithSpeed";
import EmbraceCloud from "./EmbraceCloud";

const List = () => {
  return (
    <Box>
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign="left"
        fontFamily="'Roboto', sans-serif"
        pl="3%"
        pb="5%"
        pt="3%"
      >
        Let's Collaborate
      </Text>
      <UnorderedList listStyleType="none">
        <ListItem>
          <AIAndRPA />
        </ListItem>

        <ListItem>
          <MakeBolderChoices />
        </ListItem>

        <ListItem>
          <InnovateWithSpeed />
        </ListItem>

        <ListItem>
          <EmbraceCloud />
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default List;
