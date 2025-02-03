import { Container, SimpleGrid, Box, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container fluid py={4}>
      <SimpleGrid columns={{ base: 1, md: 4, xl: 6 }}>
        <GridItem colSpan={{ base: 1, md: 1, xl: 1 }}>
          <Box
            p="4"
            borderWidth="1px"
            borderColor="border.disabled"
            color="fg.disabled"
            borderRadius="md"
            height="96vh"
            overflow={{ base: "auto" }}
          >
             
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 3, xl: 5 }}>

        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
