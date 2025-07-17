// lib/actions/updateOrderStatus.ts
"use server";

import { revalidatePath } from "next/cache";

export async function updateOrderStatus(id: string, formData: FormData) {
  const availabilityStatus = formData.get("availabilityStatus");
  console.log("updateOrderStatus::", availabilityStatus);

  await fetch(`https://dummyjson.com/products/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(availabilityStatus),
  });
  revalidatePath("/products"); // Refresh orders list cache
}
