import { mollie } from '../../lib/mollie';
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { order } = req.body;

  const dbOrder = await prisma.order.create({ data: {
    orderId: 'ord_' + Date.now(),
    total: order.total,
    currency: 'EUR',
    status: 'pending',
    items: order.items
  }});

  try {
    const payment = await mollie.payments.create({
      amount: { value: (order.total).toFixed(2), currency: 'EUR' },
      description: `Order ${dbOrder.orderId}`,
      redirectUrl: `${process.env.NEXTAUTH_URL}/checkout/success?order=${dbOrder.orderId}`,
      webhookUrl: `${process.env.NEXTAUTH_URL}/api/mollie-webhook`,
      metadata: { orderId: dbOrder.orderId }
    });

    res.status(200).json({ checkoutUrl: payment._links.checkout.href });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Payment creation failed' });
  }
}
