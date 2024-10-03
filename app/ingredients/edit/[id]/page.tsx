import {
  getIngredientDetails,
  getStores,
  updateIngredient,
} from "@/app/actions";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default async function EditIngredient({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const stores = await getStores();

  const ingredientDetails = await getIngredientDetails(params.id);

  return (
    <div>
      <div className="mb-8 gap-2 flex border-b p-2 items-center">
        <Link
          className="flex gap-2 px-4 py-2 rounded-sm items-center"
          href="/ingredients"
        >
          <LuArrowLeft className="text-xl" />
        </Link>
        <h1 className="text-2xl font-bold">Edit {ingredientDetails[0].name}</h1>
      </div>
      <form
        action={updateIngredient}
        className="max-w-xl grid grid-cols-2 items-start place-items-center  mx-auto m-2 gap-6"
      >
        <input type="hidden" name="id" value={ingredientDetails[0].id} />
        <label>
          <p className="text-sm block">Name</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="text"
            name="name"
            defaultValue={ingredientDetails[0].name}
          />
        </label>
        <label>
          <p className="text-sm block">Store</p>
          <select
            defaultValue={ingredientDetails[0].store_id}
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
            name="price"
            defaultValue={ingredientDetails[0].price}
          />
        </label>
        <label>
          <p className="text-sm block">Servings per pack</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="text"
            name="servingsPerPack"
            defaultValue={ingredientDetails[0].servings_per_pack}
          />
        </label>
        <label>
          <p className="text-sm block">Serving size</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="text"
            name="servingSize"
            defaultValue={ingredientDetails[0].serving_size}
          />
        </label>
        <label>
          <p className="text-sm block">Calories</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            name="calories"
            defaultValue={ingredientDetails[0].calories}
          />
        </label>
        <label>
          <p className="text-sm block">Total fat</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            name="totalFat"
            defaultValue={ingredientDetails[0].total_fat}
          />
        </label>
        <label>
          <p className="text-sm block">Total carbs</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            name="totalCarbs"
            defaultValue={ingredientDetails[0].total_carbs}
          />
        </label>
        <label>
          <p className="text-sm block">Protein</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            name="protein"
            defaultValue={ingredientDetails[0].protein}
          />
        </label>
        <label>
          <p className="text-sm block">Fiber</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            name="fiber"
            defaultValue={ingredientDetails[0].fiber}
          />
        </label>
        <label>
          <p className="text-sm block">Cholesterol</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            name="cholesterol"
            defaultValue={ingredientDetails[0].cholesterol}
          />
        </label>
        <label>
          <p className="text-sm block">Sodium</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="number"
            name="sodium"
            defaultValue={ingredientDetails[0].sodium}
          />
        </label>
        <button className="mt-8 border w-56 p-1 px-3 py-2 rounded-sm bg-slate">
          Save
        </button>
      </form>
    </div>
  );
}
