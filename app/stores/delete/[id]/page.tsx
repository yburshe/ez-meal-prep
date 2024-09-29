import { getStoreDetails, deleteStore } from "@/app/actions";
import Link from "next/link";

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
    <div className="flex shadow-sm w-fit mx-auto justify-center flex-col border rounded-sm">
      <h1 className="p-2 border-b text-xl font-semibold">
        You are about to delete {storeName}
      </h1>
      <div className="p-2 flex justify-between">
        <Link href="/stores">No</Link>
        <form action={deleteStore}>
          <input type="hidden" name="id" value={params.id} />
          <button>Yes</button>
        </form>
      </div>
    </div>
  );
}
