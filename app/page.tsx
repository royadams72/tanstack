import { QueryClient, dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import OrdersListClient from "@/components/OrdersListClient";
import productsData from "@/data/products.json";

export default async function OrdersPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products", 1],
    queryFn: async () => productsData.products,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <OrdersListClient initialPage={1} />
    </HydrationBoundary>
  );
}
