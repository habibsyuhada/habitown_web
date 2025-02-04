import { Container, SimpleGrid, Box, GridItem, ProgressCircle, AbsoluteCenter, Text, VStack, HStack, Heading } from "@chakra-ui/react";
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
    "2025-02-01": true,
    "2025-02-02": true,
    "2025-02-03": true,
    "2025-02-04": true,
  };

  const streakData = [
    { startDate: "2025-01-01", endDate: "2025-02-04", days: 35 },
    { startDate: "2024-12-01", endDate: "2024-12-31", days: 31 },
    { startDate: "2024-11-15", endDate: "2024-11-30", days: 15 },
  ];

  return (
    <Container maxW="container.xl" py={8}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
        <GridItem colSpan={1}>
          <VStack gap={6} align="stretch">
            <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
              <VStack gap={4} align="stretch">
                <Heading size="md" color="pink.400">Habit Calendar</Heading>
                <HabitCalendar year={2025} month={1} habitData={habitData} />
              </VStack>
            </Box>

            <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
              <VStack gap={4} align="stretch">
                <Heading size="md" color="pink.400">Progress Overview</Heading>
                <HStack gap={8} justify="center" py={4}>
                  <VStack align="center" gap={3}>
                    <Text fontSize="sm" fontWeight="medium">Daily</Text>
                    <ProgressCircle.Root size="lg" value={75} colorPalette="pink">
                      <ProgressCircle.Circle>
                        <ProgressCircle.Track />
                        <ProgressCircle.Range strokeLinecap="round" />
                      </ProgressCircle.Circle>
                      <AbsoluteCenter>
                        <ProgressCircle.ValueText />
                      </AbsoluteCenter>
                    </ProgressCircle.Root>
                  </VStack>
                  <VStack align="center" gap={3}>
                    <Text fontSize="sm" fontWeight="medium">Monthly</Text>
                    <ProgressCircle.Root size="lg" value={85} colorPalette="pink">
                      <ProgressCircle.Circle>
                        <ProgressCircle.Track />
                        <ProgressCircle.Range strokeLinecap="round" />
                      </ProgressCircle.Circle>
                      <AbsoluteCenter>
                        <ProgressCircle.ValueText />
                      </AbsoluteCenter>
                    </ProgressCircle.Root>
                  </VStack>
                  <VStack align="center" gap={3}>
                    <Text fontSize="sm" fontWeight="medium">Yearly</Text>
                    <ProgressCircle.Root size="lg" value={92} colorPalette="pink">
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
              </VStack>
            </Box>

            <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
              <VStack gap={4} align="stretch">
                <Heading size="md" color="pink.400">Best Streaks</Heading>
                <VStack gap={3} align="stretch">
                  {streakData.map((streak, index) => (
                    <Box key={index} position="relative" h="40px">
                      <Box
                        bg="pink.100"
                        h="full"
                        borderRadius="md"
                        position="relative"
                      >
                        <Box
                          bg="pink.400"
                          h="full"
                          borderRadius="md"
                          width="100%"
                        />
                        <HStack
                          position="absolute"
                          top="0"
                          left="0"
                          right="0"
                          bottom="0"
                          px={4}
                          justify="space-between"
                          color="gray.700"
                        >
                          <Text fontSize="sm">{streak.startDate}</Text>
                          <Text fontSize="sm" fontWeight="bold">{streak.days} days</Text>
                          <Text fontSize="sm">{streak.endDate}</Text>
                        </HStack>
                      </Box>
                    </Box>
                  ))}
                </VStack>
              </VStack>
            </Box>
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <Box
            p="4"
            borderWidth="1px"
            borderColor="border.disabled"
            color="fg.disabled"
            borderRadius="md"
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
      </SimpleGrid>
    </Container>
  );
}
