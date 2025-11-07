import { mollie } from '../../lib/mollie';
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const paymentId = req.body.id || req.query.id;
  if (!paymentId) return res.status(400).end();

  try {
    const payment = await mollie.payments.get(paymentId);
    const orderId = payment.metadata?.orderId;
    if (!orderId) return res.status(400).end();

    const status = payment.isPaid() ? 'paid' : payment.isOpen() ? 'pending' : 'failed';

    await prisma.order.update({ where: { orderId }, data: { status, metadata: { mollie: payment }}});

    res.status(200).end();
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
}
