import { createRecipe, getIngredients } from "@/app/actions";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default async function NewRecipe() {
  const ingredients = await getIngredients();

  return (
    <div>
      <div className="mb-8 gap-2 flex border-b p-2 items-center">
        <Link
          className="flex gap-2 px-4 py-2 rounded-sm items-center"
          href="/recipes"
        >
          <LuArrowLeft className="text-xl" />
        </Link>
        <h1 className="text-2xl font-bold">Add a new recipe</h1>
      </div>
      <form action={createRecipe} className="m-2 flex flex-col gap-6">
        <label>
          <p className="text-sm block">Name</p>
          <input
            className="border w-96 p-1 rounded-md block"
            type="text"
            name="name"
          />
        </label>

        <label>
          <p className="text-lg font-semibold border-b mb-3 pb-1">
            Ingredients
          </p>
          <div className="grid grid-cols-1 gap-4">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className="grid grid-cols-2 gap-4 items-center"
              >
                <label className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    name="ingredients"
                    value={ingredient.id}
                  />
                  <p>{ingredient.name}</p>
                  <p className="text-sm text-neutral-500">
                    ({ingredient.storeName})
                  </p>
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="0"
                  className="border w-20 p-1 rounded-md place-self-end"
                />
              </div>
            ))}
          </div>
        </label>

        <button className="mt-8 border w-56 p-1 px-3 py-2 rounded-sm bg-slate">
          Save
        </button>
      </form>
    </div>
  );
}
