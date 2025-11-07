import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const method = req.method;
  if (method === 'GET') {
    const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
    return res.json(products);
  }
  if (method === 'POST') {
    const data = req.body;
    const product = await prisma.product.create({ data });
    return res.status(201).json(product);
  }
  res.status(405).end();
}
