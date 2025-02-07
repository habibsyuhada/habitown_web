import React from 'react';
import { Card, Box, HStack } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from 'react';

interface Habit {
  id: number;
  name: string;
  description: string | null;
}

const CardHabit = ({ habit }: { habit: Habit }) => {
  // Convert new lines to <br /> tags  
  const [checked, setChecked] = useState(false)
  const [borderColor, setBorderColor] = useState("cyan.200")
  const [bgColor, setBgColor] = useState("cyan.400")
  const formattedDescription = habit.description
    ? habit.description.replace(/\n/g, '<br />')
    : '';
  
    const handleCheckboxChange = (value: boolean) => {
      setChecked(value);
      if(value){
        setBorderColor("gray.200")
      }else{
        setBorderColor("cyan.200")
      }
      if(value){
        setBgColor("gray.50")
      }else{
        setBgColor("cyan.400")
      }
    };

  return (
    <Card.Root variant="elevated" my="2" flexDirection="row">
      <Card.Body p={3} bg={bgColor} border={'1px solid'} borderColor={borderColor} borderRadius={"md"}>
        <HStack>
          <Checkbox variant={"subtle"} colorPalette={"gray"} size={"lg"} pr={2} checked={checked} onChange={() => handleCheckboxChange(!checked)} />
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