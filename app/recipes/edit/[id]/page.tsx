import { getIngredients, getRecipeDetails, updateRecipe } from "@/app/actions";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default async function EditRecipe({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const recipeDetails = await getRecipeDetails(params.id);
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
        <h1 className="text-2xl font-bold">Edit {recipeDetails[0].name}</h1>
      </div>
      <form
        action={updateRecipe}
        className="m-2 flex flex-col items-center gap-6"
      >
        <input type="hidden" name="id" value={recipeDetails[0].id || "Unknown Recipe"}/>
        <label>
          <p className="text-sm block">Name</p>
          <input
            className="border w-56 p-1 rounded-sm block"
            type="text"
            name="name"
            defaultValue={recipeDetails[0].name || "Unknown Recipe"}
          />
        </label>

        <label>
          <p className="text-sm block">Ingredients</p>
          <div>
            {ingredients.map((ingredient) => (
              <div key={ingredient.id} className="grid grid-cols-2 items-center">
                <input
                  type="checkbox"
                  name="ingredients" // Checkbox to select ingredient
                  value={ingredient.id} // Send ingredient ID
                  defaultChecked={recipeDetails[0].ingredients.some(
                    (recIng) => recIng.id === ingredient.id
                  )}
                />
                <label>{ingredient.name} - {ingredient.storeName}</label>
                <input
                  type="text"
                  name="quantity" // Input for ingredient quantity
                  placeholder="Quantity"
                  defaultValue={
                    recipeDetails[0].ingredients.find(
                      (recIng) => recIng.id === ingredient.id
                    )?.quantity || ""
                  }
                  className="border w-20 p-1 rounded-sm"
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
