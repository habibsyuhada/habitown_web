// [src/pages/habits/index.tsx](src/pages/habits/index.tsx)
import { Box, Heading, VStack, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

// Data sample, nantinya bisa diganti dengan API atau state
const habits = [
  { id: "1", title: "Minum Air" },
  { id: "2", title: "Olahraga" },
];

export default function HabitList() {
  return (
    <Box p={4}>
      <Heading mb={4}>Habit Tracker</Heading>
      <Link href="/habits/create" passHref>
        <Button colorScheme="blue" mb={4}>Tambah Habit</Button>
      </Link>
      <VStack gap={4} align="stretch">
        {habits.map((habit) => (
          <Box key={habit.id} p={4} shadow="md" borderWidth="1px">
            <Text fontSize="lg">{habit.title}</Text>
            <Link href={`/habits/${habit.id}`} passHref>
              <Button size="sm" mt={2} colorScheme="teal">Lihat Detail</Button>
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}