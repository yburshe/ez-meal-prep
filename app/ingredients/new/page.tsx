import { createIngredient, getStores } from "@/app/actions";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default async function NewIngredient() {
  const stores = await getStores();

  return (
    <div>
      <div className="mb-8 gap-2 flex border-b p-2 items-center">
        <Link
          className="flex gap-2 px-4 py-2 rounded-sm items-center"
          href="/ingredients"
        >
          <LuArrowLeft className="text-xl" />
        </Link>
        <h1 className="text-2xl font-bold">Add a new ingredient</h1>
      </div>
      <form
        action={createIngredient}
        className="m-2 flex flex-col items-center gap-6"
      >
        <label>
          <p className="text-sm block">Name</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="text"
            name="name"
          />
        </label>
        <label>
          <p className="text-sm block">Store</p>
          <select
            className="border w-56 p-2 rounded-sm block bg-white"
            name="storeId"
          >
            {stores.map((store) => (
              <option key={store.id} value={store.id}>
                {store.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p className="text-sm block">Price</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            step={0.01}
            name="price"
          />
        </label>
        <label>
          <p className="text-sm block">Servings per pack</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="text"
            name="servingsPerPack"
          />
        </label>
        <label>
          <p className="text-sm block">Serving size</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="text"
            name="servingSize"
          />
        </label>
        <label>
          <p className="text-sm block">Calories</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            step={0.01}
            name="calories"
          />
        </label>
        <label>
          <p className="text-sm block">Total fat</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            step={0.01}
            name="totalFat"
          />
        </label>
        <label>
          <p className="text-sm block">Total carbs</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            step={0.01}
            name="totalCarbs"
          />
        </label>
        <label>
          <p className="text-sm block">Protein</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            step={0.01}
            name="protein"
          />
        </label>
        <label>
          <p className="text-sm block">Fiber</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            min={0}
            step={0.01}
            name="fiber"
          />
        </label>
        <label>
          <p className="text-sm block">Cholesterol</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            step={0.01}
            name="cholesterol"
          />
        </label>
        <label>
          <p className="text-sm block">Sodium</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            step={0.01}
            name="sodium"
          />
        </label>
        <button className="mt-8 border w-56 p-1 px-3 py-2 rounded-sm bg-slate">
          Create
        </button>
      </form>
    </div>
  );
}
