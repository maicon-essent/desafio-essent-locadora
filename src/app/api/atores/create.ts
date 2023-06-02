import { prisma } from '@/database/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { nome } = req.body;

  try {
    const result = await prisma.actor.create({
      data: {
        nome
      }
    })
    return res.status(201).json({result})
  } catch (err) {
    res.status(403).json({ err: err });
  }

};
