import { Container, SimpleGrid, Box, GridItem, ProgressCircle, AbsoluteCenter, Text, VStack, HStack } from "@chakra-ui/react";
import HabitCalendar from "../components/simple-calendar";
import CardHabit from "../components/card-habit";
import AddHabitButton from "../components/add-habit-button";
import { useEffect, useState } from "react";

interface Habit {
  id: number;
  name: string;
  description: string | null;
}


export default function Home() {
  const [habits, setHabits] = useState<Habit[]>([]);

  const fetchHabits = async () => {
    const response = await fetch('/api/habit');
    const data = await response.json();
    setHabits(data);
  };
  
  useEffect(() => {

    fetchHabits();
  }, []);

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
        <GridItem colSpan={{ base: 1, md: 1, xl: 1 }}>
          <AddHabitButton onHabitAdded={fetchHabits}/>
          <Box
            py="4"
            borderColor="border.disabled"
            borderRadius="md"
            maxH="90vh"
            overflowX={{ base: "show" }}
          >
            <Text fontSize="sm" fontWeight="medium">
              Have you done your habits today?
            </Text>
            {habits.map((habit) => (
              <CardHabit key={habit.id} habit={habit} />
            ))}
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
