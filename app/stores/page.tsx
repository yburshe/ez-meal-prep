import Link from "next/link";
import { LuPencil, LuPlus, LuTrash } from "react-icons/lu";
import { getStores } from "../actions";
import Card from "../components/Card";

export default async function Stores() {
  const stores = await getStores();
  return (
    <div>
      <Link
        className="shadow-md border absolute bottom-10 right-10 p-4 rounded-full"
        href="/stores/new"
      >
        <LuPlus className="text-4xl" />
      </Link>
      <div className="mb-4 border-b p-2">
        <h1 className="text-2xl font-bold">Stores</h1>
      </div>
      <ul className="flex flex-wrap gap-4">
        {stores.map((store) => (
          <Card key={store.id}>
            <div className="p-2 border-b flex justify-between">
              <Link
                className="text-lg font-semibold underline"
                href={`/stores/${store.id}`}
              >
                {store.name}
              </Link>
              <div className="flex gap-2 items-center">
                <Link href={`/stores/edit/${store.id}`}>
                  <LuPencil />
                </Link>
                <Link href={`/stores/delete/${store.id}`}>
                  <LuTrash />
                </Link>
              </div>
            </div>
            <div className="p-2">
              <p>
                {store.street_number} {store.street_name}
              </p>
              <p>
                {store.city} {store.state} {store.zip}
              </p>
            </div>
          </Card>
        ))}
      </ul>
    </div>
  );
}
