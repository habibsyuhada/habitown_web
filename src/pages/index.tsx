import { Container, SimpleGrid, Box, GridItem, ProgressCircle, AbsoluteCenter, Text, VStack, HStack } from "@chakra-ui/react";
import { RadioCardRoot, RadioCardItem } from "@/components/ui/radio-card";
import { RiAppleFill, RiBankCardFill, RiPaypalFill } from "react-icons/ri"
import HabitCalendar from "../components/simple-calendar";

export default function Home() {
  const items = [
    { value: "paypal", title: "Paypal", description: "Best App Payment111111111 11111111111111111 111111111111111111111 11111111 1111111111", icon: <RiPaypalFill /> },
    { value: "apple-pay", title: "Apple Pay", description: "Best App Payment", icon: <RiAppleFill /> },
    { value: "card", title: "Card", description: "Best App Payment", icon: <RiBankCardFill /> },
  ]

  const habitData = {
    '2025-02-01': true,
    '2025-02-02': false,
    '2025-02-03': true,
    '2025-02-04': false,
    // Tambahkan data lainnya sesuai kebutuhan  
  };

  return (
    <Container fluid py={4}>
      <SimpleGrid columns={{ base: 1, md: 4, xl: 6 }} gap={4}>
        <GridItem colSpan={{ base: 1, md: 4, xl: 6 }}>
          <Box
            p="4"
            borderWidth="1px"
            borderColor="border.disabled"
            color="fg.disabled"
            borderRadius="md"
            // height="96vh"
            overflow={{ base: "auto" }}
          >

          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1, xl: 1 }}>
          <Box
            p="4"
            borderWidth="1px"
            borderColor="border.disabled"
            color="fg.disabled"
            borderRadius="md"
            // height="96vh"
            overflow={{ base: "auto" }}
          >
            <RadioCardRoot
              orientation="vertical"
              defaultValue="paypal"
            >
              <VStack align="stretch">
                {items.map((item) => (
                  <RadioCardItem
                    label={item.title}
                    description={item.description}
                    indicator={false}
                    key={item.value}
                    value={item.value}
                  />
                ))}
              </VStack>
            </RadioCardRoot>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 3, xl: 5 }}>
          <Box
            p="4"
            borderWidth="1px"
            borderColor="border.disabled"
            color="fg.disabled"
            borderRadius="md"
            // height="96vh"
            overflow={{ base: "auto" }}
          >
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={4}>
              <GridItem colSpan={{ base: 1, md: 1 }}>
                <HabitCalendar year={2025} month={1} habitData={habitData} />
              </GridItem>
              <GridItem colSpan={{ base: 1, md: 1 }}>
                <HStack align="stretch">
                  <VStack align="stretch">
                    <Text>Overview</Text>
                    <ProgressCircle.Root size={"xl"} key={"xl"} value={35} colorPalette={"green"}>
                      <ProgressCircle.Circle>
                        <ProgressCircle.Track />
                        <ProgressCircle.Range strokeLinecap="round" />
                      </ProgressCircle.Circle>
                      <AbsoluteCenter>
                        <ProgressCircle.ValueText />
                      </AbsoluteCenter>
                    </ProgressCircle.Root>
                  </VStack>
                  <VStack align="stretch">
                    <Text>Month</Text>
                    <ProgressCircle.Root size={"xl"} key={"xl"} value={35} colorPalette={"green"}>
                      <ProgressCircle.Circle>
                        <ProgressCircle.Track />
                        <ProgressCircle.Range strokeLinecap="round" />
                      </ProgressCircle.Circle>
                      <AbsoluteCenter>
                        <ProgressCircle.ValueText />
                      </AbsoluteCenter>
                    </ProgressCircle.Root>
                  </VStack>
                  <VStack align="stretch">
                    <Text>Year</Text>
                    <ProgressCircle.Root size={"xl"} key={"xl"} value={35} colorPalette={"green"}>
                      <ProgressCircle.Circle>
                        <ProgressCircle.Track />
                        <ProgressCircle.Range strokeLinecap="round" />
                      </ProgressCircle.Circle>
                      <AbsoluteCenter>
                        <ProgressCircle.ValueText />
                      </AbsoluteCenter>
                    </ProgressCircle.Root>
                  </VStack>
                </HStack>
              </GridItem>
            </SimpleGrid>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
