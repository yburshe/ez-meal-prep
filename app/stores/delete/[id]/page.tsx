import { getStoreDetails, deleteStore } from "@/app/actions";
import DeleteCard from "@/app/components/DeleteCard";

export default async function DeleteStore({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const storeDetails = await getStoreDetails(params.id);
  const storeName = storeDetails[0].name;

  return (
    <DeleteCard serverAction={deleteStore} id={params.id} name={storeName}/>
  );
}
