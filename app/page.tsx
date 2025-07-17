import { QueryClient, dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import OrdersListClient from "@/components/OrdersListClient";
import { fetchOrders } from "@/lib/actions/fetchOrders";

export default async function OrdersPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products", 1],
    queryFn: async () => fetchOrders(1),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <OrdersListClient initialPage={1} />
    </HydrationBoundary>
  );
}
