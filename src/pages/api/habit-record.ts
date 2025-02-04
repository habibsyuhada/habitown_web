// src/pages/api/habitRecord.ts

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { habitId } = req.query;

    if (habitId) {
      const records = await prisma.habitRecord.findMany({
        where: { habitId: Number(habitId) },
      });
      res.status(200).json(records);
    } else {
      res.status(400).json({ error: 'Habit ID is required' });
    }
  } else if (req.method === 'POST') {
    const { date, completed, habitId } = req.body;

    const newRecord = await prisma.habitRecord.create({
      data: {
        date: new Date(date),
        completed,
        habitId,
      },
    });
    res.status(201).json(newRecord);
  } else if (req.method === 'PUT') {
    const { id, completed } = req.body;

    const updatedRecord = await prisma.habitRecord.update({
      where: { id },
      data: {
        completed,
      },
    });
    res.status(200).json(updatedRecord);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;

    await prisma.habitRecord.delete({
      where: { id },
    });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}