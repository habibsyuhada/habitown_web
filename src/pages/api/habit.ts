import { NextApiRequest, NextApiResponse } from 'next';  
import { PrismaClient } from '@prisma/client';  

const prisma = new PrismaClient();  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {  
  if (req.method === 'GET') {  
    const { id } = req.query;  

    if (id) {  
      const habit = await prisma.habit.findUnique({  
        where: { id: Number(id) },  
        include: { records: true },  
      });  

      if (habit) {  
        // Decode the habit fields before sending them back  
        res.status(200).json({  
          ...habit,  
          name: decodeURIComponent(habit.name),  
          description: habit.description ? decodeURIComponent(habit.description) : null,  
        });  
      } else {  
        res.status(404).end();  
      }  
    } else {  
      const habits = await prisma.habit.findMany({  
        include: { records: true },  
      });  
      res.status(200).json(  
        habits.map(habit => ({  
          ...habit,  
          name: decodeURIComponent(habit.name),  
          description: habit.description ? decodeURIComponent(habit.description) : null,  
        })),  
      );  
    }  
  } else if (req.method === 'POST') {  
    const { name, description, userId }: {  
      name: string;  
      description: string | null;  
      userId: string;  
    } = req.body;  

    // Encode name and description to handle special characters, including new lines  
    const newHabit = await prisma.habit.create({  
      data: {  
        name: encodeURIComponent(name),  
        description: description ? encodeURIComponent(description) : null,  
        userId,  
      },  
    });  
    res.status(201).json(newHabit);  
  } else if (req.method === 'PUT') {  
    const { id, name, description }: {  
      id: number;  
      name: string;  
      description: string | null;  
    } = req.body;  

    // Encode name and description to handle special characters, including new lines  
    const updatedHabit = await prisma.habit.update({  
      where: { id },  
      data: {  
        name: encodeURIComponent(name),  
        description: description ? encodeURIComponent(description) : null,  
      },  
    });  
    res.status(200).json(updatedHabit);  
  } else if (req.method === 'DELETE') {  
    const { id } = req.body;  

    await prisma.habit.delete({  
      where: { id },  
    });  
    res.status(204).end();  
  } else {  
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);  
    res.status(405).end(`Method ${req.method} Not Allowed`);  
  }  
}