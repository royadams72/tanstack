// app/orders/OrdersListClient.tsx
"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import productsData from "@/data/products.json";

async function fetchProducts() {
  await new Promise((r) => setTimeout(r, 2000)); // 2s delay
  return productsData.products;
}
export default function OrdersListClient({
  initialPage,
}: {
  initialPage: number;
}) {
  const { data } = useQuery({
    queryKey: ["products", initialPage],
    queryFn: fetchProducts,
  });

  return (
    <ul>
      {data?.map((o: any) => (
        <li key={o.id}>
          <Link href={`/orders/${o.id}/edit/`}>{o.title}</Link>
          <ul>
            <li>{o.availabilityStatus}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
