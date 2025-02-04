import React from 'react';  
import { Box, Grid, Text } from '@chakra-ui/react';  

interface HabitCalendarProps {
  year: number;
  month: number;
  habitData: { [key: string]: boolean };
}

const HabitCalendar = ({ year, month, habitData }: HabitCalendarProps) => {  
  const daysInMonth = new Date(year, month + 1, 0).getDate();  
  const firstDay = new Date(year, month, 1).getDay();  

  const weekDays = ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];  

  function renderDays({ year, month, habitData }: { year: number; month: number; habitData: { [key: string]: boolean } }) {  
    const days = [];  

    for (let i = 0; i < firstDay; i++) {  
      days.push(<Box key={`empty-${i}`} w="30px" h="30px" />);  
    }  

    for (let day = 1; day <= daysInMonth; day++) {  
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;  
      const isHabitCompleted = habitData[dateString];  

      days.push(  
        <Box  
          key={day}  
          py={1}
          display="flex"  
          alignItems="center"  
          justifyContent="center"  
          bg={isHabitCompleted ? 'green.400' : 'gray.200'}  
          color="white"  
          borderRadius="md"  
        >  
          <Text fontSize="xs" fontWeight="bold">{day}</Text> {/* Ukuran font lebih kecil */}  
        </Box>  
      );  
    }  
    return days;  
  };  

  return (  
    <Box>  
      <Grid templateColumns="repeat(7, 1fr)" gap={1}>  
        {weekDays.map((day, index) => (  
          <Box key={index} display="flex" alignItems="center" justifyContent="center">  
            <Text fontSize="xs" fontWeight="bold">{day}</Text>  
          </Box>  
        ))}  
      </Grid>  
      <Grid templateColumns="repeat(7, 1fr)" gap={1}>  
        {renderDays({ year, month, habitData })}  
      </Grid>  
    </Box>  
  );  
};  

export default HabitCalendar;