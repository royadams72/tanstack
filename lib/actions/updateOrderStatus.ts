// lib/actions/updateOrderStatus.ts
"use server";

import { revalidatePath } from "next/cache";

export async function updateOrderStatus(
  id: string,
  page: string,
  formData: FormData
) {
  const availabilityStatus = formData.get("availabilityStatus");
  console.log("page::", page);

  await fetch(`http://localhost:3001/products/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ availabilityStatus }),
  });
  revalidatePath(`/products?page=${page}`); // Refresh orders list cache
}
