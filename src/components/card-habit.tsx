import React from 'react';
import { Card, Box, HStack } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox"

interface Habit {
  id: number;
  name: string;
  description: string | null;
}

const CardHabit = ({ habit }: { habit: Habit }) => {
  // Convert new lines to <br /> tags  
  const formattedDescription = habit.description
    ? habit.description.replace(/\n/g, '<br />')
    : '';

  return (
    <Card.Root variant="elevated" my="2" flexDirection="row">
      <Card.Body p={3} bg={"cyan.50"} border={'1px solid'} borderColor={"cyan.200"} borderRadius={"md"}>
        <HStack>
          <Checkbox variant={"subtle"} colorPalette={"gray"} size={"lg"} pr={2} />
          <Box>
            <Card.Title fontSize="sm">{habit.name}</Card.Title>
            <Card.Description fontSize="xs" dangerouslySetInnerHTML={{ __html: formattedDescription }} />
          </Box>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default CardHabit;