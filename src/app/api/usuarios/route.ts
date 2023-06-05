import { prisma } from '@/database/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
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