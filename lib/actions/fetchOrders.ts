// app/actions/fetchOrders.ts
export async function fetchOrders(page: number) {
  const res = await fetch(`https://localhost:3000/data/products.json`);
  if (!res.ok) throw new Error("Failed to fetch orders");
  console.log(await res.json());

  return res.json(); // { products: Order[], total, skip, limit }
}

export async function fetchOrder(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch order");
  return res.json(); // { id: string, availabilityStatus: string }
}
