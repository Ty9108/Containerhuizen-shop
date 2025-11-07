import Link from 'next/link';
export default function Home(){
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Containerhuizen Shop</h1>
      <p className="mt-4">Demo webshop - producten en admin</p>
      <div className="mt-6">
        <Link href="/admin">Admin dashboard</Link>
      </div>
    </div>
  );
}
