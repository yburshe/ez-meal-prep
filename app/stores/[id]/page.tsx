import { getStoreDetails } from "@/app/actions";
import Link from "next/link";
import { LuArrowLeft, LuPencil, LuTrash } from "react-icons/lu";

export default async function Store({ params }: { params: { id: number } }) {
  const storeDetails = await getStoreDetails(params.id);

  return (
    <div>
      <div className="mb-8 flex justify-between border-b items-center">
        <div className="gap-2 flex p-2 items-center">
          <Link
            className="flex gap-2 px-4 py-2 rounded-sm items-center"
            href="/stores"
          >
            <LuArrowLeft className="text-xl" />
          </Link>
          <h1 className="text-2xl font-bold">{storeDetails[0].name}</h1>
        </div>
        <div className="flex gap-4 items-center p-2">
          <Link href={`/stores/edit/${storeDetails[0].id}`}>
            <LuPencil className="text-xl" />
          </Link>
          <Link href={`/stores/delete/${storeDetails[0].id}`}>
            <LuTrash className="text-xl" />
          </Link>
        </div>
      </div>
      <div>
        <p>
          {storeDetails[0].street_number} {storeDetails[0].street_name}
        </p>
        <p>
          {storeDetails[0].city} {storeDetails[0].state} {storeDetails[0].zip}
        </p>
      </div>
    </div>
  );
}
