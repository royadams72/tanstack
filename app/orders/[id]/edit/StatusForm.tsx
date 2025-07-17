// app/orders/[id]/edit/StatusForm.tsx
"use client";
import { useOptimistic, startTransition } from "react";
import { updateOrderStatus } from "@/lib/actions/updateOrderStatus";

type Props = { order: { id: string; availabilityStatus: string } };

export function StatusForm({ order }: Props) {
  console.log(order);

  const [optimisticStatus, setOptStatus] = useOptimistic(
    order.availabilityStatus,
    (_prev, newStatus: string) => newStatus
  );
  const action = updateOrderStatus.bind(null, order.id);
  return (
    <form action={action}>
      <select
        name="availabilityStatus"
        defaultValue={optimisticStatus}
        onChange={(e) =>
          startTransition(() => setOptStatus(e.currentTarget.value))
        }
      >
        {["Out of Stock", "In Stock"].map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <button type="submit">Update</button>
      <div>availabilityStatus is: {order.availabilityStatus}</div>
    </form>
  );
}
