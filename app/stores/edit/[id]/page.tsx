// 'use client'
import { editStore } from "@/app/actions/editStore";
import { db } from "@/db/drizzle";
import { store } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function EditStore({
  params,
}: {
  params: { id: number };
}) {
  
  const storeInfo = await db
    .select()
    .from(store)
    .where(eq(store.store_id, params.id));

  return (
    <div className="p-4">
      <h1 className="border-b font-semibold text-xl mb-8">Edit Store</h1>
      <form className="flex flex-col gap-4 items-center" action={editStore}>
      <input hidden name="store_id" defaultValue={storeInfo[0].store_id} />
      <label className="block">
        Store Name
        <input
        className="block border rounded-md"
        type="text"
        name="store_name"
        defaultValue={storeInfo[0].store_name}
        />
      </label>
      <label>
        Street Number
        <input
        className="block border rounded-md"
        type="number"
        name="street_number"
        defaultValue={storeInfo[0].street_number}
        />
      </label>
      <label>
        Street Name
        <input
        className="block border rounded-md"
        type="text"
        name="street_name"
        defaultValue={storeInfo[0].street_name}
        />
      </label>
      <label>
        City
        <input
        className="block border rounded-md"
        type="text"
        name="city"
        defaultValue={storeInfo[0].city}
        />
      </label>
      <label>
        State
        <input
        className="block border rounded-md"
        type="text"
        name="state"
        defaultValue={storeInfo[0].state}
        />
      </label>
      <label>
        Zip
        <input
        className="block border rounded-md"
        type="text"
        name="zip"
        defaultValue={storeInfo[0].zip}
        />
      </label>
      <button
        className="bg-slate-50 hover:bg-slate-100 px-8 py-2 rounded-md shadow-sm mt-4"
        type="submit"
      >
        Submit
      </button>
      </form>
    </div>
  );
}
