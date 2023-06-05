import { prisma } from '@/database/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const clientes = await prisma.client.findMany({})
      const nome = clientes.map(client => client.nome)
      return res.status(200).json({ nome })

    } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Erro ao buscar a lista de clientes' })
    }
  } else {
    res.status(405).json({ err: 'Métod is not alowned' });
  }

};
