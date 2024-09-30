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
    <div className="flex shadow-sm w-fit mx-auto justify-center flex-col border rounded-md text-center">
      <h1 className="px-4 py-2 text-center border-b text-xl font-semibold">
      ⚠️ You are about to delete {storeName}
      </h1>
      <div className="p-4 flex justify-between">
        <Link className="shadow-sm border border-neutral-300 bg-neutral-100 hover:bg-neutral-200 px-4 py-2 rounded-md" href="/stores">Cancel</Link>
        <form action={deleteStore}>
          <input type="hidden" name="id" value={params.id} />
          <button className="shadow-sm border border-red-300 bg-red-100 hover:bg-red-200 px-4 py-2 rounded-md">Delete</button>
        </form>
      </div>
    </div>
  );
}
