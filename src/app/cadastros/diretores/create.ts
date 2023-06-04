import { prisma } from '@/database/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { nome } = req.body;

  try {
    const result = await prisma.director.create({
      data: { nome }
    })
    return res.status(201).json({ result })
  } catch (err) {
    console.error('Erro ao cadastrar o diretor', err)
    res.status(403).json({ err: err });
  }
};
