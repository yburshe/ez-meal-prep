import { getStores } from "../actions";
import Card from "../components/Card";
import { NewButton } from "../components/Buttons";

export default async function Stores() {
  const stores = await getStores();
  return (
    <div>
      <NewButton type="stores" />
      <div className="mb-4 p-2">
        <h1 className="text-2xl font-bold">Stores</h1>
      </div>
      <ul className="flex flex-wrap gap-4">
        {stores.map((store) => (
          <Card href={`stores/${store.id}`} key={store.id}>
            <h2 className="text-lg font-semibold border-b dark:border-neutral-600 pb-2 mb-2">{store.name}</h2>
            <p>
              {store.street_number} {store.street_name}
            </p>
            <p>
              {store.city} {store.state} {store.zip}
            </p>
          </Card>
        ))}
      </ul>
    </div>
  );
}
