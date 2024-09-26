import { db } from "@/db/drizzle";
import { store } from "@/db/schema";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default async function Stores() {
  const stores = await db.select().from(store);
  return (
    <div className="p-4">
      <h1 className="font-semibold text-xl border-b mb-8">Stores</h1>
      <div className="">
        <div className="grid grid-cols-2 gap-4">
          {stores.map((store) => (
            <div
              className="border rounded-md p-4 flex flex-col"
              key={store.store_id}
            >
              <h2 className="font-medium text-lg">{store.store_name}</h2>
              <p>
                {store.street_number} {store.street_name}
              </p>
              <p>
                {store.city}, {store.state} {store.zip}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link
        className="absolute bottom-10 right-10 rounded-full border p-6 shadow-md bg-slate-50"
        href="/stores/create"
      >
        <FaPlus />
      </Link>
    </div>
  );
}
