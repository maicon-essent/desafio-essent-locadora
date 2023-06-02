import { prisma } from '@/database/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { nome, email, password } = req.body;
  await prisma.user.create({
    data: {
      nome,
      email,
      password,
    }
  })
  return res.status(201).json({})
};
