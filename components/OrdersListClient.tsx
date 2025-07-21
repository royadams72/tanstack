// app/orders/OrdersListClient.tsx
"use client";
import { fetchOrders } from "@/lib/actions/fetchOrders";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function OrdersListClient({
  initialPage,
}: {
  initialPage: number;
}) {
  const { data } = useQuery({
    queryKey: ["products", initialPage],
    queryFn: () => fetchOrders(initialPage),
  });

  return (
    <ul>
      {data &&
        data?.map((o: any) => (
          <li key={o.id}>
            <Link href={`/orders/${o.id}/edit/?page=${initialPage}`}>
              {o.title}
            </Link>
            <ul>
              <li>{o.availabilityStatus}</li>
            </ul>
          </li>
        ))}
    </ul>
  );
}
