import { prisma } from '@/database/prisma';
import { NextApiRequest, NextApiResponse } from 'next';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
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

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { titulo, categoria, elenco, ano_lancamento, sinopse, valor_locacao, qtd_copias_disponiveis } = req.body;
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
