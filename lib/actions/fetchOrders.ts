// app/actions/fetchOrders.ts
export async function fetchOrders(page: number) {
  const res = await fetch(
    `http://localhost:3001/products?_page=${page}&_limit=10&_start=${page * 10}`
  );
  if (!res.ok) throw new Error("Failed to fetch orders");

  return res.json(); // { products: Order[], total, skip, limit }
}

export async function fetchOrder(id: string) {
  const res = await fetch(`http://localhost:3001/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch order");
  return res.json(); // { id: string, availabilityStatus: string }
}
