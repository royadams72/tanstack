import { fetchOrder } from "@/lib/actions/fetchOrders";
import { StatusForm } from "./StatusForm";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const EditPage = async ({ params, searchParams }: PageProps) => {
  //  Should I be getting this from the cached state?
  const { id } = await params;
  const page = (await searchParams)?.page;
  const order = await fetchOrder(id);

  console.log(page);

  return (
    <>
      <div>{order.title}</div>
      <StatusForm
        order={{
          id,
          availabilityStatus: order.availabilityStatus,
          page: page as string,
        }}
      />
    </>
  );
};

export default EditPage;
