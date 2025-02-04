import React from 'react';  
import { Card } from "@chakra-ui/react";  

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
    <Card.Root variant="elevated" my="2">  
      <Card.Body p={3} bg={"cyan.50"} border={'1px solid'} borderColor={"cyan.200"} borderRadius={"md"}>  
        <Card.Title fontSize="sm">{habit.name}</Card.Title>  
        <Card.Description fontSize="xs" dangerouslySetInnerHTML={{ __html: formattedDescription }} />  
      </Card.Body>  
    </Card.Root>  
  );  
};  

export default CardHabit;