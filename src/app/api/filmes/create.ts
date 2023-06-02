import { prisma } from '@/database/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { titulo, categoria, elenco, ano_lancamento, sinopse, valor_locacao, qtd_copias_disponiveis} = req.body;

  try {
    const result = await prisma.movie.create({
      data: {
        titulo,
        categoria,
        elenco, 
        ano_lancamento, 
        sinopse, 
        valor_locacao, 
        qtd_copias_disponiveis
      }
    })
    return res.status(201).json({ result })
  } catch (err) {
    res.status(403).json({ err: err });
  }

};
