import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const orders = await prisma.order.findMany({ orderBy: { createdAt: 'desc' } });
    return res.json(orders);
  }
  res.status(405).end();
}
