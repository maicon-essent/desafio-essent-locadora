import { prisma } from '@/database/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const filmes = await prisma.movie.findMany({})
      const titulos = filmes.map(movie => movie.titulo)
      return res.status(200).json({ titulos })

    } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Erro ao buscar a lista de filmes' })
    }
  } else {
    res.status(405).json({ err: 'Métod is not alowned' });
  }

};
