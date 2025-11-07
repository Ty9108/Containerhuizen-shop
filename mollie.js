import Mollie from '@mollie/api-client';
export const mollie = Mollie({ apiKey: process.env.MOLLIE_API_KEY });
