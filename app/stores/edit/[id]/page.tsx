import { getStoreDetails, updateStore } from "@/app/actions";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import usStates from "@/db/usStates.json";
import { Button } from "@/app/components/Buttons";

export default async function EditStore({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const storeDetails = await getStoreDetails(params.id);

  return (
    <div>
      <div className="mb-8 gap-2 flex  border-b p-2 items-center">
        <Link
          className="flex gap-2 px-4 py-2 rounded-md items-center"
          href={`/stores/${params.id}`}
        >
          <LuArrowLeft className="text-xl" />
        </Link>
        <h1 className="text-2xl font-bold">Edit store</h1>
      </div>
      <form
        action={updateStore}
        className="w-56 mx-auto m-2 flex flex-col items-center gap-6"
      >
        <input type="hidden" name="id" value={params.id} />
        <label>
          <p className="text-sm text-neutral-600">Name</p>
          <input
            defaultValue={storeDetails[0].name}
            className="border w-56 p-1 rounded-md block"
            type="text"
            name="name"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600">Street Number</p>
          <input
            defaultValue={storeDetails[0].street_number}
            className="border w-56 p-1 rounded-md block"
            type="number"
            name="streetNumber"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600">Street Name</p>
          <input
            defaultValue={storeDetails[0].street_name}
            className="border w-56 p-1 rounded-md block"
            type="text"
            name="streetName"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600">City</p>
          <input
            defaultValue={storeDetails[0].city}
            className="border w-56 p-1 rounded-md block"
            type="text"
            name="city"
          />
        </label>
        <label>
          <p className="text-sm text-neutral-600">State</p>
          <select
            className="border w-56 p-2 bg-white rounded-md block"
            name="state"
            defaultValue={storeDetails[0].state}
          >
            {usStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p className="text-sm text-neutral-600">Zip</p>
          <input
            defaultValue={storeDetails[0].zip}
            className="border w-56 p-1 rounded-md block"
            type="text"
            name="zip"
          />
        </label>
        <Button text="Save" />
      </form>
    </div>
  );
}
