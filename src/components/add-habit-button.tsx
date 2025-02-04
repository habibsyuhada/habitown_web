import React, { useState } from 'react';  
import { Button, Stack, Textarea } from "@chakra-ui/react";  
import { Field } from "@/components/ui/field";  
import {  
  DialogBody,  
  DialogCloseTrigger,  
  DialogContent,  
  DialogFooter,  
  DialogHeader,  
  DialogRoot,  
  DialogTitle,  
  DialogTrigger,  
  DialogActionTrigger,  
} from "@/components/ui/dialog";  
import { FaPlus } from "react-icons/fa";  
import axios from 'axios';  

const AddHabitButton = ({ onHabitAdded }: { onHabitAdded: () => void }) => {  
  const [habitName, setHabitName] = useState("");  
  const [habitDescription, setHabitDescription] = useState("");  
  const [open, setOpen] = useState(false); // State to manage dialog visibility  

  const handleSave = async () => {  
    const habits = habitName.split('\n')  
      .map(title => title.trim())  
      .filter(title => title.length > 0);  

    if (habits.length > 0) {  
      for (const habit of habits) {  
        if(habit == ''){
          continue
        }
        try {  
          await axios.post("/api/habit", {  
            name: habit,  
            description: habitDescription,  
            userId: 'cm6j2bqf60003iryk2pm2siqy',  
          });  

          setHabitName("");  
          setHabitDescription("");  
          
          setOpen(false);
          onHabitAdded();
        } catch (err) {  
          console.log(err);  
        }  
      }  
    }  
  };  

  return (  
    <DialogRoot key={"lg"} size={"lg"} open={open}> {/* Removed onClose prop */}  
      <DialogTrigger asChild>  
        <Button colorPalette={"cyan"} variant="surface" size={"sm"} width="100%" mb={4} onClick={() => setOpen(true)}>  
          <FaPlus /> Add New Habit  
        </Button>  
      </DialogTrigger>  
      <DialogContent>  
        <DialogHeader>  
          <DialogTitle>Dialog Title</DialogTitle>  
        </DialogHeader>  
        <DialogBody>  
          <Stack gap="4">  
            <Field label="Habit">  
              <Textarea  
                placeholder="Enter multiple habits separated by new line"  
                value={habitName}  
                onChange={(e) => setHabitName(e.target.value)}  
              />  
            </Field>  
            <Field label="Description">  
              <Textarea  
                placeholder="Enter habit description"  
                value={habitDescription}  
                onChange={(e) => setHabitDescription(e.target.value)}  
              />  
            </Field>  
          </Stack>  
        </DialogBody>  
        <DialogFooter>  
          <DialogActionTrigger asChild>  
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>  
          </DialogActionTrigger>  
          <Button onClick={handleSave}>Save</Button>  
        </DialogFooter>  
        <DialogCloseTrigger onClick={() => setOpen(false)} /> {/* Close trigger */}  
      </DialogContent>  
    </DialogRoot>  
  );  
};  

export default AddHabitButton;