
export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "40px" }}>
      <h1>Welkom bij Containerhuizen Shop 🏠</h1>
      <p>De webshop voor moderne containerwoningen.</p>
      <a href="/api/products">Bekijk producten</a>
    </div>
  );
}import { PrismaClient } from '@prisma/client';

let prisma;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) global.prisma = new PrismaClient();
  prisma = global.prisma;
}
export default prisma;
export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "40px" }}>
      <h1>Welkom bij Containerhuizen Shop 🏠</h1>
      <p>De webshop voor moderne containerwoningen.</p>
      <a href="/api/products">Bekijk producten</a>
    </div>
  );
}
