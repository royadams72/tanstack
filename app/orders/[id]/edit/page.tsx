import { fetchOrder } from "@/lib/actions/fetchOrders";
import { StatusForm } from "./StatusForm";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

const EditPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const order = await fetchOrder(id);

  // console.log(order);

  return (
    <>
      <div>{order.title}</div>
      <StatusForm
        order={{ id, availabilityStatus: order.availabilityStatus }}
      />
    </>
  );
};

export default EditPage;
