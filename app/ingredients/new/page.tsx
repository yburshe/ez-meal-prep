import { createIngredient, getStores } from "@/app/actions";
import { Button } from "@/app/components/Buttons";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default async function NewIngredient() {
  const stores = await getStores();

  return (
    <div>
      <div className="mb-8 gap-2 flex border-b p-2 items-center">
        <Link
          className="flex gap-2 px-4 py-2 rounded-md items-center"
          href="/ingredients"
        >
          <LuArrowLeft className="text-xl" />
        </Link>
        <h1 className="text-2xl font-bold">Add a new ingredient</h1>
      </div>
      <form
        action={createIngredient}
        className="max-w-xl grid grid-cols-2 items-start place-items-center  mx-auto m-2 gap-6"
      >
        <div className="flex flex-col gap-4">
          <label>
            <p className="text-sm block mb-1">Name</p>
            <input
              className="border w-56 p-1 rounded-md block"
              type="text"
              name="name"
            />
          </label>
          <label>
            <p className="text-sm block mb-1">Store</p>
            <select
              className="border w-56 p-2 rounded-md block bg-white"
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
            <p className="text-sm block mb-1">Price</p>
            <input
              className="border w-56 p-1 rounded-md block"
              type="number"
              step={0.01}
              name="price"
            />
          </label>
          <label>
            <p className="text-sm block mb-1">Servings per pack</p>
            <input
              className="border w-56 p-1 rounded-md block"
              type="text"
              name="servingsPerPack"
            />
          </label>
          <label>
            <p className="text-sm block mb-1">Serving size</p>
            <input
              className="border w-56 p-1 rounded-md block"
              type="text"
              name="servingSize"
            />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <label>
            <p className="text-sm block mb-1">Calories</p>
            <input
              className="border w-56 p-1 rounded-md block"
              type="number"
              step={0.01}
              name="calories"
            />
          </label>
          <label>
            <p className="text-sm block mb-1">Total fat</p>
            <input
              className="border w-56 p-1 rounded-md block"
              type="number"
              step={0.01}
              name="totalFat"
            />
          </label>
          <label>
            <p className="text-sm block mb-1">Total carbs</p>
            <input
              className="border w-56 p-1 rounded-md block"
              type="number"
              step={0.01}
              name="totalCarbs"
            />
          </label>
          <label>
            <p className="text-sm block mb-1">Protein</p>
            <input
              className="border w-56 p-1 rounded-md block"
              type="number"
              step={0.01}
              name="protein"
            />
          </label>
          <label>
            <p className="text-sm block mb-1">Fiber</p>
            <input
              className="border w-56 p-1 rounded-md block"
              type="number"
              min={0}
              step={0.01}
              name="fiber"
            />
          </label>
          <label>
            <p className="text-sm block mb-1">Cholesterol</p>
            <input
              className="border w-56 p-1 rounded-md block"
              type="number"
              step={0.01}
              name="cholesterol"
            />
          </label>
          <label>
            <p className="text-sm block mb-1">Sodium</p>
            <input
              className="border w-56 p-1 rounded-md block"
              type="number"
              step={0.01}
              name="sodium"
            />
          </label>
        </div>
        <div className="col-start-2 justify-self-end mx-auto mt-4">
          <Button text="Create" />
        </div>
      </form>
    </div>
  );
}
